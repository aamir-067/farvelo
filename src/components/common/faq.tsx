import React from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
export const Faq = () => {
    return (
        <section className="mx-auto max-w-7xl px-2 py-10 mt-20 md:px-0">
            <div>
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, assumenda
                    </p>
                </div>
                <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
                </div>

                <div className='w-7/12 mx-auto'>
                    {
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Is it styled?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It comes with default styles that matches the other
                                    components&apos; aesthetic.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Is it animated?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It&apos;s animated by default, but you can disable it if you
                                    prefer.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    }
                </div>


                <p className="textbase mt-6 text-center text-gray-600">
                    Can&apos;t find what you&apos;re looking for?{' '}
                    <a href="#" title="" className="font-semibold text-black hover:underline">
                        Contact our support
                    </a>
                </p>
            </div>
        </section>
    )
}
