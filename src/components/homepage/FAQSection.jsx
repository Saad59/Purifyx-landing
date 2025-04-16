import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import Image from "next/image";

const faqCategories = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/a541ebb3442546939997c0a9735cb960/bb3d3aaa652bece25d48cd5c868f5931f57e2368?placeholderIfAbsent=true",
    title: "Search",
    description:
      "These questions help you get started with finding leads or businesses.",
    questions: [
      {
        question: "How do I start a search for leads?",
        answer: "You can start a search by navigating to the Search tab in the dashboard and entering keywords related to your target audience. You can filter results based on industry, location, company size, and more."
      },
      {
        question: "What filters can I use to narrow down my search?",
        answer: "PurifyX offers a wide range of filters including industry, company size, location, revenue, founding date, technology used, and more. These filters help you find the most relevant leads for your business."
      },
      {
        question: "Can I save my search for later?",
        answer: "Yes, you can save any search for later by clicking the 'Save Search' button. Your saved searches will appear in the 'Saved Searches' section for quick access in the future."
      },
    ],
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/a541ebb3442546939997c0a9735cb960/9e458a7471acc02dfc56eb80f5b5fe64257679c6?placeholderIfAbsent=true",
    title: "Lists",
    description:
      "These questions show you how to keep your search results organized.",
    questions: [
      {
        question: "How do I create a list from my search results?",
        answer: "After running a search, select the leads you want to save and click the 'Add to List' button. You can create a new list or add to an existing one."
      },
      {
        question: "Can I edit or delete lists later?",
        answer: "Yes, you can edit or delete lists at any time. Go to the 'Lists' section, select the list you want to modify, and use the edit or delete options."
      },
      {
        question: "What's the best way to organize my lists?",
        answer: "Create specific lists based on campaigns, industries, or sales stages. You can also use tags and notes to add more context to your lists."
      },
      {
        question: "How does InboxAutomation ensure 100% inbox placement?",
        answer: "InboxAutomation uses advanced email deliverability techniques including IP warming, domain authentication, and dynamic sending patterns to maximize inbox placement rates."
      },
    ],
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/a541ebb3442546939997c0a9735cb960/d3ba7f334bfc380ac920e9e20354a8750a7358c9?placeholderIfAbsent=true",
    title: "Find Local Bussiness",
    description:
      "These questions explain this upcoming feature and what it's all about.",
    questions: [
      {
        question: 'What does "Find Local Businesses-pending" mean?',
        answer: "This feature is currently in development and will be available soon. It will allow you to discover businesses in specific geographic locations."
      },
      {
        question: "How can I use this feature to find businesses near me?",
        answer: "Once released, you'll be able to search for businesses within a specific radius of any location. You can further refine results by business type, size, and other criteria."
      },
      {
        question: "When will this feature be available?",
        answer: "The Find Local Businesses feature is scheduled for release in the next product update. Stay tuned for announcements in our newsletter or product dashboard."
      },
    ],
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/a541ebb3442546939997c0a9735cb960/62ad0fa3b2169e0a01253c8a46cba177641626a8?placeholderIfAbsent=true",
    title: "Data Enrichment / CSV Enrichment-CRM Enrichment",
    description:
      "These questions cover how to boost your lead data with extra details.",
    questions: [
      {
        question: "What is data enrichment, and how does it help me?",
        answer: "Data enrichment adds valuable information to your existing lead data, such as contact details, social profiles, company information, and more. This helps you understand your leads better and create more personalized outreach."
      },
      {
        question: "How do I upload a CSV file for enrichment?",
        answer: "Go to the 'Data Enrichment' section, click 'Upload CSV', select your file, and map the columns. Our system will process your file and add additional data points to your leads."
      },
      {
        question: "Can I enrich data directly in my CRM?",
        answer: "Yes, with our CRM integrations, you can enrich data directly in your CRM. Connect your CRM in the 'Integrations' section and select which data fields you want to enrich."
      },
      {
        question: "How long does enrichment take?",
        answer: "Enrichment processing time depends on the size of your dataset. Small lists (under 1,000 contacts) typically take just a few minutes, while larger lists may take up to a few hours."
      },
    ],
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/a541ebb3442546939997c0a9735cb960/fdac6cfde35c6d5209594d7606276f39e72dfe58?placeholderIfAbsent=true",
    title: "Sequence",
    description: "These questions help you automate outreach like a pro",
    questions: [
      {
        question: "What is a sequence, and how does it work?",
        answer: "A sequence is a series of automated emails sent to leads over time. You can set the timing, content, and conditions for each email in the sequence. This helps you maintain consistent follow-up without manual work."
      },
      {
        question: "How do I set up a sequence for my leads?",
        answer: "Go to the 'Sequences' section, click 'Create New Sequence', design your email templates, set the timing between emails, and select which leads should receive the sequence."
      },
      {
        question: "Can I make my emails feel personal?",
        answer: "Absolutely! Use personalization tokens to dynamically insert lead information like name, company, and custom fields. You can also use conditional content that displays differently based on lead attributes."
      },
    ],
  },
];

const FAQSection = () => {
  return (
    <section className="w-full bg-[rgba(246,246,253,1)]">
      <div className="w-full max-w-[1300px] mx-auto px-4 md:px-6 xl:px-8 2xl:px-0 py-[80px] md:py-[100px] lg:py-[140px]">
        <div className="w-full">
          <div className="w-full text-center">
            <h2
              id="faq-title"
              className="text-[28px] sm:text-[36px] md:text-[48px] font-semibold text-text-color tracking-[-0.02em]"
            >
              Frequently Asked Questions
            </h2>
            <p className="text-[15px] font-medium leading-[150%] text-text-color mx-auto px-4">
              We've got you covered! Discover how PurifyX connects you to customers quickly. Explore below or contact our team!
            </p>
          </div>

          <div className="flex flex-col lg:flex-row w-full items-start gap-6 sm:gap-[60px] mt-10 sm:mt-20 relative">
            {/* AI Assistant Card */}
            <div className="w-full lg:w-[268px] order-2 lg:order-1 h-fit self-start sticky top-24">
              <div className="p-[1px] bg-gradient-to-t from-primary-500 to-[#BBB4F0] rounded-xl overflow-hidden">
                <Card className="bg-white rounded-[12px]">
                  <CardContent className="flex flex-col h-full px-8">
                    <div className="flex flex-col items-stretch text-text-color justify-center h-full">
                      <h3 className="text-lg sm:text-xl font-medium">Have Questions? We're Here to Help!</h3>
                      <p className="text-xs leading-6 mt-3 sm:mt-4 text-text-color font-medium">
                        Reach out to our support team for any queries or assistance.
                      </p>
                    </div>
                    <Button className="mt-6 sm:mt-[56px] bg-[#5443DA] hover:bg-[#4936C7] text-white w-full flex justify-between items-center py-3 px-5 rounded-lg transition-colors duration-200">
                      <span className="text-base font-medium">AI Assistant</span>
                      <Image src="/Vectorstar.svg" alt="starvector" width={20} height={20} />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* FAQ Categories */}
            <div className="flex-1 order-1 w-full lg:order-2">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="flex w-full flex-col items-stretch mt-10 first:mt-0 sm:mt-[60px]">
                  <div className="flex items-start sm:items-center gap-3 sm:gap-5">
                    <img
                      src={category.icon}
                      className="aspect-[1] object-contain w-8 sm:w-[43px]"
                      alt=""
                    />
                    <div className="flex flex-col flex-1">
                      <h3 className="text-[#3E3941] text-base sm:text-[19px] font-semibold leading-tight sm:leading-[1.4]">
                        {category.title}
                      </h3>
                      <p className="text-[#636777] text-sm sm:text-base font-medium leading-normal sm:leading-[1.6] mt-1">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="w-full mt-4 sm:mt-5">
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((item, questionIndex) => (
                        <AccordionItem
                          key={questionIndex}
                          value={`item-${categoryIndex}-${questionIndex}`}
                          className="bg-white border border-[rgba(232,232,232,1)] rounded-xl mb-3 sm:mb-4 overflow-hidden data-[state=open]:shadow-sm transition-shadow duration-200"
                        >
                          <AccordionTrigger className="px-4 sm:px-5 py-3 sm:py-5 hover:no-underline group">
                            <span className="text-left text-base sm:text-lg text-[#303030] font-medium group-hover:text-[#5443DA] transition-colors duration-200">
                              {`${questionIndex + 1}. ${item.question}`}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="px-4 sm:px-5 pb-4 sm:pb-5">
                            <p className="text-[#636777] text-sm sm:text-base leading-relaxed sm:leading-[1.6]">
                              {item.answer || "Coming soon..."}
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;