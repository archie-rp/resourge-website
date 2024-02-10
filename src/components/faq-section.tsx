import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
	{
	  id: "item-1",
	  question: "What are the main features of Resourge's web development tools?",
	  answer: "Resourge offers a range of innovative web development tools designed to simplify and streamline the development process. Our tools include React-form for easy form building, Schema validation for validating complex data structures, Translations for multilingual support, React Router for handling navigation and Fetch for data fetching.",
	},
	{
	  id: "item-2",
	  question: "How can I get support for Resourge's web development tools?",
	  answer: "If you need assistance with any of our web development tools, you can contact our support team by sending an email to support@resourge.com or by visiting our support page on our website. Our dedicated support team is available to assist you with any questions or issues you may have.",
	},
	{
	  id: "item-3",
	  question: "Do you offer training or documentation for your web development tools?",
	  answer: "Yes, we provide comprehensive documentation and tutorials for all of our web development tools. You can find documentation and tutorials on our website, as well as helpful resources such as FAQs, code samples, and troubleshooting guides.",
	},
	{
	  id: "item-4",
	  question: "Are there any additional fees for using Resourge's web development tools?",
	  answer: "No, there are no additional fees for using our web development tools. Once you've purchased a license for our tools, you have full access to all features and updates with no hidden costs or fees.",
	},
	{
	  id: "item-5",
	  question: "Can I customize Resourge's web development tools to fit my specific needs?",
	  answer: "Yes, our web development tools are highly customizable and can be tailored to fit your specific needs. Whether you need to customize the look and feel of your forms, add additional validation rules, or integrate with other libraries or frameworks, our tools offer flexibility and customization options to meet your requirements.",
	},
  ];

export default function FaqSection() {
	return (
		<Accordion type="single" collapsible className="w-full">
			{faqData.map((faqItem) => (
				<AccordionItem key={faqItem.id} value={faqItem.id}>
					<AccordionTrigger>{faqItem.question}</AccordionTrigger>
					<AccordionContent>{faqItem.answer}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	)
}
