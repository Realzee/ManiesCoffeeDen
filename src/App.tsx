/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { Coffee, Settings, ShieldCheck, Phone, Mail, MapPin, Award, ChevronRight, Wrench, Droplets, Zap, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Toaster } from "@/components/ui/sonner";
import { PRODUCTS, SERVICES, CONTACT_INFO, GALLERY_IMAGES, BRANDING } from "./constants";

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-accent selection:text-accent-foreground">
      <Toaster position="top-center" />
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary overflow-hidden">
              {BRANDING.logo ? (
                <img src={BRANDING.logo} className="h-full w-full object-cover" referrerPolicy="no-referrer" alt="Logo" />
              ) : (
                <Coffee className="h-6 w-6 text-primary-foreground" />
              )}
            </div>
            <span className="text-xl font-heading font-bold tracking-tight text-primary">Manies Coffee Den</span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#products" className="text-sm font-medium hover:text-primary transition-colors">Products</a>
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
            <a href="#gallery" className="text-sm font-medium hover:text-primary transition-colors">Gallery</a>
            <a href="#guarantee" className="text-sm font-medium hover:text-primary transition-colors">Guarantee</a>
            
            <Button size="sm" nativeButton={false} render={<a href={`tel:${CONTACT_INFO.phone}`}>Call Now</a>} />
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          {BRANDING.hero && (
            <div className="absolute inset-0 -z-20">
              <img 
                src={BRANDING.hero} 
                className="h-full w-full object-cover opacity-10 blur-[2px]" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
            </div>
          )}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.05),transparent)] opacity-50" />
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="flex flex-col items-center text-center"
            >
              <motion.div variants={itemVariants}>
                <Badge variant="outline" className="mb-4 border-primary/20 bg-primary/5 px-4 py-1 text-primary">
                  {CONTACT_INFO.membership}
                </Badge>
              </motion.div>
              <motion.h1 
                variants={itemVariants}
                className="max-w-4xl text-5xl font-heading font-bold leading-tight md:text-7xl"
              >
                Premium Coffee <span className="text-primary italic">Consumables</span> & Expert <span className="text-primary italic">Repairs</span>
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
              >
                Wholesale supplier of professional "free flow" products and premium roast beans. 
                Specializing in 2-group machine repairs and vending solutions across Johannesburg.
              </motion.p>
              <motion.div variants={itemVariants} className="mt-10 flex flex-wrap justify-center gap-4">
                <Button size="lg" nativeButton={false} className="h-12 px-8 text-base" render={<a href="#products">View Price List</a>} />
                <Button size="lg" nativeButton={false} variant="outline" className="h-12 px-8 text-base" render={<a href={`mailto:${CONTACT_INFO.email}`}>Request Quote</a>} />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-none bg-transparent shadow-none">
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Award className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl">Wholesale Quality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Professional grade free-flow products and premium single-origin roasts for your business.</p>
                </CardContent>
              </Card>
              <Card className="border-none bg-transparent shadow-none">
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Settings className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl">Technical Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Expert repair and maintenance for 2-group machines, vending units, and hydroboils.</p>
                </CardContent>
              </Card>
              <Card className="border-none bg-transparent shadow-none">
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl">Business Continuity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Our "Free Loan Unit" guarantee ensures your coffee never stops flowing during major repairs.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Content Tabs */}
        <section id="products" className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-heading font-bold md:text-5xl">Wholesale Price List 2026</h2>
              <p className="mt-4 text-muted-foreground">Competitive pricing for professional hospitality and office environments.</p>
            </div>

            <Tabs defaultValue="products" className="mx-auto max-w-5xl">
              <TabsList className="grid w-full grid-cols-2 bg-secondary/50 p-1">
                <TabsTrigger value="products" className="text-base">Coffee & Solubles</TabsTrigger>
                <TabsTrigger value="services" className="text-base">Technical Services</TabsTrigger>
              </TabsList>

              <TabsContent value="products" className="mt-8">
                <div className="grid gap-8">
                  {PRODUCTS.map((category, idx) => (
                    <Card key={idx} className="overflow-hidden border-primary/10 bg-card/50 backdrop-blur-sm">
                      <CardHeader className="bg-primary/5 border-b border-primary/5">
                        <CardTitle className="text-2xl font-heading flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-accent" />
                          {category.category}
                        </CardTitle>
                        <CardDescription>Professional grade products in 1kg packs</CardDescription>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                          {category.items.map((item: any, itemIdx: number) => (
                            <motion.div 
                              key={itemIdx} 
                              whileHover={{ y: -5 }}
                              className="group relative flex flex-col overflow-hidden rounded-2xl border bg-background transition-all hover:shadow-xl hover:shadow-primary/5"
                            >
                              <div className="aspect-[4/3] overflow-hidden bg-muted">
                                <img 
                                  src={item.image} 
                                  alt={item.name}
                                  referrerPolicy="no-referrer"
                                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </div>
                              <div className="flex flex-1 flex-col p-5">
                                <h4 className="font-bold text-lg tracking-tight">{item.name}</h4>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{item.description}</p>
                                <div className="mt-5 flex items-center justify-between">
                                  <div className="flex flex-col">
                                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Price per kg</span>
                                    <span className="font-bold text-primary text-xl">{item.price}</span>
                                  </div>
                                  <Button size="icon" variant="secondary" className="h-10 w-10 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <Plus className="h-5 w-5" />
                                  </Button>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="services" className="mt-8">
                <Card className="border-primary/10 bg-card/50 backdrop-blur-sm">
                  <CardHeader className="bg-primary/5 border-b border-primary/5">
                    <CardTitle className="text-2xl font-heading flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-accent" />
                      Technical & Water Health
                    </CardTitle>
                    <CardDescription>Maintenance, repairs, and filtration solutions</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      {SERVICES.map((service: any, idx: number) => (
                        <motion.div 
                          key={idx} 
                          whileHover={{ x: 5 }}
                          className="flex flex-col overflow-hidden rounded-2xl border bg-background sm:flex-row group"
                        >
                          <div className="h-48 w-full shrink-0 sm:h-auto sm:w-48 overflow-hidden">
                            <img 
                              src={service.image} 
                              alt={service.name}
                              referrerPolicy="no-referrer"
                              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                          </div>
                          <div className="flex flex-1 flex-col p-5">
                            <h4 className="font-bold text-lg tracking-tight">{service.name}</h4>
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{service.notes}</p>
                            <div className="mt-auto pt-5 flex items-center justify-between">
                              <span className="font-bold text-primary text-lg">{service.price}</span>
                              <Badge variant="outline" className="text-[10px] uppercase tracking-widest">Expert Service</Badge>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <div className="flex items-start gap-4 rounded-xl border bg-card p-6">
                    <div className="rounded-lg bg-primary/10 p-2 text-primary">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold">Hydroboil Experts</h4>
                      <p className="text-sm text-muted-foreground">Professional installation and maintenance of 1L and 2.5L Hydroboil units for instant boiling water.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-xl border bg-card p-6">
                    <div className="rounded-lg bg-primary/10 p-2 text-primary">
                      <Droplets className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold">Water Health</h4>
                      <p className="text-sm text-muted-foreground">Essential limescale protection. We recommend filter cartridge replacement every 6 months.</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="bg-secondary/20 py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-heading font-bold md:text-5xl">Our Work & Products</h2>
              <p className="mt-4 text-muted-foreground">A glimpse into our professional services and premium coffee range.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {GALLERY_IMAGES.map((img, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 1 : -1 }}
                  className="aspect-square overflow-hidden rounded-3xl border bg-muted shadow-lg group relative"
                >
                  <img 
                    src={img} 
                    alt={`Gallery image ${idx + 1}`}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section id="guarantee" className="bg-primary py-24 text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center gap-12 md:flex-row">
              <div className="flex-1 space-y-6">
                <h2 className="text-4xl font-heading font-bold md:text-5xl">The "Manies Coffee Den" Guarantee</h2>
                <p className="text-xl opacity-90">
                  We understand that your business depends on your coffee machine. If your 2-group machine requires major off-site repairs (24h+), we provide a <strong>free loaner unit</strong> to keep your business running.
                </p>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <ShieldCheck className="h-5 w-5" />
                  <span>Available to all contract supply clients.</span>
                </div>
                <Button size="lg" nativeButton={false} variant="secondary" className="mt-4" render={<a href={`tel:${CONTACT_INFO.phone}`}>Contact Manie for Details</a>} />
              </div>
              <div className="relative flex-1">
                <div className="aspect-square rounded-3xl bg-white/10 p-8 backdrop-blur-sm">
                  <div className="flex h-full flex-col justify-between">
                    <div className="space-y-4">
                      <div className="h-2 w-12 rounded-full bg-accent" />
                      <h3 className="text-3xl font-heading font-bold italic">Zero Downtime.</h3>
                      <p className="text-lg opacity-80">Our commitment to your business success means we're there when things go wrong.</p>
                    </div>
                    <div className="flex justify-end">
                      <Coffee className="h-24 w-24 opacity-20" />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-accent/20 blur-3xl" />
                <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-primary-foreground/10 blur-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-4xl font-heading font-bold">Get in Touch</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Ready to upgrade your coffee supply or need a machine serviced? Contact Manie today for personalized wholesale pricing and expert advice.
                </p>
                
                <div className="mt-10 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Phone</p>
                      <a href={`tel:${CONTACT_INFO.phone}`} className="text-xl font-bold hover:text-primary transition-colors">{CONTACT_INFO.phone}</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Email</p>
                      <a href={`mailto:${CONTACT_INFO.email}`} className="text-xl font-bold hover:text-primary transition-colors">{CONTACT_INFO.email}</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Location</p>
                      <p className="text-xl font-bold">{CONTACT_INFO.location}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="border-primary/10 bg-secondary/20">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading">Business Hours</CardTitle>
                  <CardDescription>Contact us during these times for the fastest response.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-muted-foreground">08:00 – 17:00</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Saturday</span>
                    <span className="text-muted-foreground">09:00 – 13:00</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span className="font-medium">Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                  
                  <div className="mt-8 rounded-xl bg-primary p-6 text-primary-foreground">
                    <div className="flex items-center gap-2 font-bold">
                      <Award className="h-5 w-5" />
                      <span>VASA Member</span>
                    </div>
                    <p className="mt-2 text-sm opacity-90">Proud member of the Vending Association of South Africa. Committed to professional standards and excellence.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-secondary/50 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Coffee className="h-4 w-4" />
              </div>
              <span className="text-lg font-heading font-bold tracking-tight">Manies Coffee Den</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Manies Coffee Den. All rights reserved.
            </p>
            <div className="flex gap-4">
               <Badge variant="secondary" className="font-normal">Soweto</Badge>
               <Badge variant="secondary" className="font-normal">Johannesburg</Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
