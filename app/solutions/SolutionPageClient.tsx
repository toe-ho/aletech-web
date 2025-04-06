"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

interface SolutionPageClientProps {
  solution: {
    id: string
    icon: React.ReactNode
    label: string
    title: string
    description: string
    features: string[]
    image: string
    benefits: string[]
    caseStudies: {
      title: string
      description: string
      image: string
      link: string
    }[]
  }
}

export default function SolutionPageClient({ solution }: SolutionPageClientProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <div>
      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold">Key Features</h2>
              <div className="h-1 w-16 bg-primary"></div>
              <p className="text-muted-foreground">
                Our {solution.label} solutions come with a comprehensive set of features designed to address your specific needs.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {solution.features.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>
              
              {/* <Button className="bg-primary hover:bg-primary/90 text-white">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button> */}
            </motion.div>
            
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-xl filter blur-lg opacity-70"></div>
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden">
                <Image
                  src={solution.image || "/placeholder.svg"}
                  alt={solution.title}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-background/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                  <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs">
                    <span className="text-primary font-medium">{solution.label} Solutions</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Benefits of Our {solution.label} Solutions</h2>
            <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">
              Discover how our {solution.label} solutions can transform your business operations and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solution.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-lg border border-border shadow-sm relative group hover:scale-105 transition-transform duration-300"
              >
                <div className="absolute -inset-[0.5px] rounded-lg bg-gradient-to-r from-primary/50 via-primary to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[0.5px] border border-primary/30"></div>
                <div className="relative bg-card rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">{benefit}</h3>
                  <p className="text-muted-foreground">
                    Our {solution.label} solutions provide comprehensive benefits to help your business thrive in today's competitive landscape.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Case Studies</h2>
            <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">
              Explore how our {solution.label} solutions have helped businesses achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solution.caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg overflow-hidden border border-border shadow-sm"
              >
                <div className="relative h-48">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                  <p className="text-muted-foreground mb-4">{study.description}</p>
                  <Link href={study.link} className="text-primary hover:underline inline-flex items-center">
                    Read Case Study
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 