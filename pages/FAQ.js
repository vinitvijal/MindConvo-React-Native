import { Accordion, AccordionContent, AccordionContentText, AccordionHeader, AccordionIcon, AccordionItem, AccordionTitleText, AccordionTrigger, Image, SafeAreaView, ScrollView } from '@gluestack-ui/themed';
import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FAQ = () => {
    const quesAns = [
        {
            question: "How can I connect with the therapist at Mindconvo?",
            answer: " To connect with a therapist, simply go to the 'Therapists' section in the app, browse through profiles of recommended therapists, and select the one that matches your preferences. Make the payment and post that you can schedule a session(s) at your convenience with your therapist."
        },
        {
            question: "Is my information safe and private?",
            answer: "Yes, privacy and security are our top priorities. All communications are end-to-end encrypted, and we strictly adhere to industry standards and regulations to safeguard your data."
        },
        {
            question: "How much time will it take for me to connect with my therapist?",
            answer: "The therapist confirmation will be visible to you on my bookings in the therapy section of the app. In most cases, the therapist is assigned within 12-24 hours at the earliest. In case you are still not assigned the therapist within 12-24 hours, you can immediately message us in the Contact Us section, and our help desk will look into it at the earliest."
        },
        {
            question: "What If the therapist I prefer to connect with is not assigned to me post-payment?",
            answer: "We humbly request and recommend you to be open to at least 2-3 therapist preferences so that just in case your preferred therapist is unavailable temporarily due to medical or personal reasons, other therapists who are equally good can help you in your journey towards healing and growth."
        },
        {
            question: "What type of communication mode can I connect with a therapist?",
            answer: "We offer Chat/ Audio/ Video options to connect with the therapist. The therapist will connect with you as per your preferred option. To ensure confidentiality, we recommend chatting and calling only via the Mindconvo App, and video calls are recommended via the Google Meet link shared by the therapist over chat."
        },
        {
            question: "Can I connect for a group session with my partner or family member?",
            answer: "Yes, we do offer couple therapy and family therapy services as well and encourage you to connect with an experienced professional."
        },
        {
            question: "What is the refund policy for the services?",
            answer: "We assure best services to you in this healing journey. However, if you are not happy with our services, our customer care will try to help you resolve your difficulties as the utmost priority to help you improve the overall experience. If you are not satisfied with the therapist, we offer you a change in therapist to ensure you have the best experience in your journey. If you still choose to discontinue our services, we respect your decision and will help you with the refund policy. **Kindly note that a full refund will be applicable only if the therapist is not assigned within 24-48 hours of the request."
        },
        {
            question: "Can I use the Mindconvo App if I'm not currently facing mental health challenges?",
            answer: "Absolutely! MindConvo is designed for everyone, whether you're looking for support during challenging times or aiming to maintain and enhance your overall mental well-being."
        },
        {
            question: "Are there self-help tools for specific mental health concerns?",
            answer: "Yes, our Resource Library and Discover section in the app includes a wide range of content addressing various mental health concerns, from stress and anxiety to relationships and personal development."
        },
        {
            question: "How can I contribute to the community on MindConvo?",
            answer: "Join our discussions, share your experiences, and provide support to others in the community. Your engagement can make a positive impact on someone else's mental health journey."
        }
    ]

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.2, backgroundColor: "#FF841A", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ position: "absolute", bottom: 12, fontSize: 25, fontWeight: "400" }}>
                    Help Desk</Text>
            </View>
            <View style={{ margin: 10, padding: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: "500", letterSpacing: 0.7, textAlign: "center" }}>
                    <Text style={{color: "#F7813E", fontWeight: 800}}>Discover MindConvo:</Text> Your FAQs Unraveled for Easy Understanding!</Text>
            </View>
            <View style={{ flex: 0.1, justifyContent: "center", alignItems: "center" }}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", borderBottomWidth: 2, borderBottomColor: "#e2e2e2", width: "85%" }}>
                    <Text style={{
                        borderBottomWidth: 1,
                        fontSize: 30,
                        fontWeight: "800",
                        textAlign: "center",
                    }}>
                        FAQs
                    </Text>
                </View>
            </View>
            <FAQQuestions/>
        </View>
        
    );

    function FAQQuestions() {
        return <ScrollView style={{ flex: 0.5, marginBottom: 50}}>

            <Accordion
                m="$5"
                width="90%"
                size="md"
                variant="unfilled"
                type="single"
                isCollapsible={true}
                isDisabled={false}
            >
                {quesAns.map((item, index) => (
                    <AccordionItem value={index+1} key={index+1}>
                    <AccordionHeader>
                        <AccordionTrigger>
                            {({ isExpanded }) => {
                                return (
                                    <>
                                        <AccordionTitleText>{item.question}</AccordionTitleText>
                                        {isExpanded ? (
                                            <Ionicons name="chevron-up" size={25} color="#F7813E" />
                                        ) : (
                                            <Ionicons name="chevron-down" size={25} color="#F7813E" />
                                        )}
                                    </>
                                );
                            } }
                        </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent>
                        <AccordionContentText>
                            {item.answer}
                        </AccordionContentText>
                    </AccordionContent>
                </AccordionItem>
                ))}
            </Accordion>
        </ScrollView>;
    }
}

const styles = StyleSheet.create({})

export default FAQ;
