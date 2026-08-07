"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Activity, BatteryCharging, Cpu, UploadCloud, Zap, ChevronRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function DiagnosticsPage() {
  const [isScanning, setIsScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scanComplete, setScanComplete] = useState(false);

  const startScan = () => {
    setIsScanning(true);
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 2;
      setProgress(currentProgress);
      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsScanning(false);
          setScanComplete(true);
        }, 500);
      }
    }, 50);
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6 sm:p-12 font-sans">
      <div className="max-w-6xl mx-auto space-y-8 mt-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4"
        >
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight mb-2">Battery Diagnostics</h1>
            <p className="text-muted-foreground text-lg">Professional-grade AI analysis for EV battery health.</p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="rounded-full h-12 px-6">
              <UploadCloud className="w-5 h-5 mr-2" /> Upload CSV
            </Button>
            <Button className="rounded-full h-12 px-6 bg-primary hover:bg-primary/90 text-primary-foreground" onClick={startScan} disabled={isScanning || scanComplete}>
              <Zap className="w-5 h-5 mr-2" /> {isScanning ? "Running AI..." : "Choose Demo Battery"}
            </Button>
          </div>
        </motion.div>

        {/* Scanning Interface */}
        {isScanning && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="glass rounded-3xl p-8 border border-primary/30 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent w-[200%] animate-[shimmer_2s_infinite]" />
            <div className="relative z-10 flex flex-col items-center justify-center space-y-6">
              <Activity className="w-16 h-16 text-primary animate-pulse" />
              <h3 className="text-2xl font-bold">Analyzing Cell Integrity...</h3>
              <div className="w-full max-w-md space-y-2">
                <Progress value={progress} className="h-3" />
                <p className="text-center text-sm text-muted-foreground">{progress}% Complete</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Results Interface */}
        {scanComplete && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass rounded-3xl p-8 border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-500" />
              </div>
              <div>
                <h3 className="text-3xl font-bold">Analysis Complete</h3>
                <p className="text-muted-foreground">Battery #B-7892 is ready for AI grading.</p>
              </div>
            </div>
            <Button size="lg" className="rounded-full h-14 px-8 text-lg" asChild>
              <Link href="/results">
                View AI Results <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        )}

        {/* Data Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-4">
          {[
            { label: "Battery ID", value: "B-7892", icon: Cpu },
            { label: "Manufacturer", value: "Tesla (Panasonic)", icon: BatteryCharging },
            { label: "Chemistry", value: "NCA (Nickel Cobalt Aluminum)", icon: Activity },
            { label: "Voltage", value: "355.2 V", icon: Zap },
            { label: "Capacity", value: "72.4 kWh", icon: BatteryCharging },
            { label: "Charge Cycles", value: "1,240", icon: Activity },
            { label: "Temperature", value: "24.5 °C", icon: Activity },
            { label: "Cell Balance", value: "98.2%", icon: Cpu },
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="glass border-border/40 hover:border-primary/50 transition-colors duration-300">
                <CardHeader className="pb-2 flex flex-row items-center gap-3">
                  <div className="p-2 bg-secondary rounded-lg">
                    <item.icon className="w-4 h-4 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-sm font-medium text-muted-foreground">{item.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">{item.value}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
