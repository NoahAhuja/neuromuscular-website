const diseases = [
  {
    id: "peripheral-neuropathy",
    name: "Peripheral Neuropathy",
    category: "Nerve",
    globalCases: "*190-300 million",
    description: "Neuropathy is when nerves are damaged. When these nerves are damaged, pain, weakness, uncontrollability, and numbness can occur. A hallmark of peripheral neuropathy is that tingling and numbness begins in toes and fingers before spreading upward.\n\nIn neuropathy, misfiring of nerves around the central or peripheral nervous system can create adverse effects. The central nervous system (CNS) includes the brain and spinal cord, while the peripheral nervous system (PNS) connects the CNS with the rest of the body. In peripheral neuropathy, the PNS is mainly impacted.\n\nPeripheral neuropathy can lead to many issues, specifically in the feet. Blisters and sores in the feet can arise; however, since neuropathy can make you lose your ability to feel pain, the blisters and sores get worse. Chronic pain can lead to depression, grief, or anxiety.",
    facts: ["Affects peripheral nerves", "Can be genetic or acquired"],
    ageOfOnset: "Up to 10% of people over age 50 and nearly 40% of people over age 70",
    sectionOverviews: {
      causes: "Peripheral Neuropathy can have many different causes. Sometimes, there is no cause identified. This is called idiopathic neuropathy. The most common causes is diabetes as high blood sugar can lead to the damaging of blood vessels that supply oxygen to your nerves.",
      symptoms: "There are billions of nerves in the body, and they have many specialized jobs. Symptoms heavily depend on which nerves are being affected. The three main nerves are motor, sensory, and automatic and which nerve the disease affects may determine symptoms.",
      treatments: "There are a variety of different treatments depending on your symptoms. Sometimes, lab tests won't give conclusive results and your physician may use watchful waiting. ",
      diagnosis: "Your doctor may perform numerous tests to evaluate nerve damage. Some include but are not limited to:"
    },
    causes: [
      {
        name: "Diabetes",
        explanation: "High blood sugar levels damage nerve fibers, causing diabetic neuropathy.",
        comparisonTags: [{
          id: "diabetes",
          label: "Diabetes",
          explanation: "This tag groups these two elements broadly; it does not mean the elements are identical."
        }]
        
      },
      {
        name: "Autoimmune disorders",
        explanation: "Conditions like Sjögren syndrome or rheumatoid arthritis cause the immune system to attack healthy nerves.",
        comparisonTags: [{
          id: "autoimmune",
          label: "Autoimmune-related causes",
          explanation: "This tag groups these two elements broadly; it does not mean the elements are identical."
        }]
      },
      {
        name: "Infections",
        explanation: "Infections such as HIV/AIDS, Lyme disease, and shingles can cause nerve damage.",
        comparisonTags: [{
          id: "infections",
          label: "Infections",
          explanation: "This tag groups these two elements broadly; it does not mean the elements are identical."
        }]
      },
      {
        name: "Vitamin deficiencies",
        explanation: "Lacking essential vitamins such as B12, D, and E can impair nerve function.",
        comparisonTags: [{
          id: "vitamin-deficiencies",
          label: "Vitamin deficiencies",
          explanation: "This tag groups these two elements broadly; it does not mean the elements are identical."
        }]
      },
      {
        name: "Injury and trauma",
        explanation: "Carpal tunnel syndrome, accidents, or herniated disks can damage nerves.",
        comparisonTags: [{
          id: "injury-and-trauma",
          label: "Injury and trauma",
          explanation: "This tag groups these two elements broadly; it does not mean the elements are identical."
        }]
      },
      {
        name: "Bone marrow conditions",
        explanation: "Conditions such as monoclonal gammopathies, caused by a protein in the blood that isn't usually there, can cause neuropathy.",
        comparisonTags: [{
          id: "bone-marrow-conditions", 
          label: "Bone marrow conditions",
          explanation: "This tag groups these two elements broadly; it does not mean the elements are identical."
        }]
      },
      {
        name: "Other causes",
        explanation: "Alcoholism, medications, and exposure to toxins can also cause nerve damage.",
        comparisonTags: [{
          id: "environmental-exposure",
          label: "Environmental exposure",
          explanation: "These entries broadly describe environmental exposures that may contribute to disease or nerve damage."
        }]
      }
    ],
    symptoms: [
      {
        name: "Swollen feet",
        explanation: "Inflammation in the feet due to nerve damage and impaired circulation.",
        comparisonTags: [{
          id: "Inflammation",
          label: "Inflammation",
          explanation: "This tag groups these two elements broadly; it does not mean the elements are identical."
        }]
      },
      {
        name: "Sharp pain",
        explanation: "Jabbing, throbbing, or burning pain in affected areas caused by nerve misfiring.",
        comparisonTags: [{
          id: "pain",
          label: "Pain",
          explanation: "This tag groups these two elements broadly; it does not mean the elements are identical."
        }]
      },
      {
        name: "Numbness",
        explanation: "Loss of sensation, especially in hands, feet, and legs due to nerve damage.",
        comparisonTags: [{
          id: "numbness",
          label: "Numbness",
          explanation: "This tag groups these two elements broadly; it does not mean the elements are identical."
        }]
      },
      {
        name: "Weakness",
        explanation: "Reduced muscle strength in affected areas caused by nerve signal interruption.",
        comparisonTags: [{
          id: "muscle-weakness",
          label: "Muscle weakness",
          explanation: "This tag groups these two elements broadly; it does not mean the elements are identical."
        }]
      },
      {
        name: "Balance issues",
        explanation: "Lack of coordination and increased risk of falling due to sensory loss.",
        comparisonTags: [{
          id: "balance-issues",
          label: "Balance issues",
          explanation: "This tag groups these two elements broadly; it does not mean the elements are identical."
        }, {
          id: "mobility-difficulties",
          label: "Mobility difficulties",
          explanation: "These entries broadly describe difficulties with moving around."
        }]
      },
      {
        name: "Digestive complications",
        explanation: "Diarrhea, nausea, and constipation can occur when nerves affecting the digestive system are damaged.",
        comparisonTags: [{
          id: "digestive-complications",
          label: "Digestive symptoms",
          explanation: "This tag groups these two elements broadly; it does not mean the elements are identical."
        }]
      }
    ],
    treatments: {
      medication: [
        {
          name: "Pain relievers",
          explanation: "NSAIDs (ibuprofen, aspirin) are used for mild pain, while opioids are used for stronger pain relief.",
          comparisonTags: [{
          id: "pain-relivers",
          label: "Pain relievers",
          explanation: "This tag groups these two elements broadly; it does not mean the elements are identical."
        }]
        },
        {
          name: "Antidepressants",
          explanation: "Nortriptyline, desipramine, and mipramine suppress nerve pain by altering brain chemistry.",
          comparisonTags: [{
          id: "antidepressants",
          label: "Antidepressants",
          explanation: "This tag groups these two elements broadly; it does not mean the elements are identical."
        }]
        },
        {
          name: "Anticonvulsants",
          explanation: "Gabapentin and pregabalin prevent abnormal electrical activity in nerves.",
          comparisonTags: [{
          id: "anticonvulsants",
          label: "Anticonvulsants",
          explanation: "This tag groups these two elements broadly; it does not mean the elements are identical."
        }]
        },
        {
          name: "Topical treatments",
          explanation: "Lidocaine patches, skin creams, and sprays are applied directly to skin to reduce localized pain.",
          comparisonTags: [{
          id: "topical-treatments",
          label: "Topical treatments",
          explanation: "This tag groups these two elements broadly; it does not mean the elements are identical."
        }]
        }
      ],
      therapy: [
        {
          name: "Physical therapy",
          explanation: "Exercises and techniques help improve ability to move hands and feet.",
          comparisonTags: [{
          id: "physical-therapy",
          label: "Physical therapy",
          explanation: "This tag groups these two elements broadly; it does not mean the elements are identical."
        }]
        },
        {
          name: "Occupational therapy",
          explanation: "Therapy designed to help recover and maintain daily working skills and independence.",
          comparisonTags: [{
          id: "occupational-therapy",
          label: "Occupational therapy",
          explanation: "This tag groups these two elements broadly; it does not mean the elements are identical."
        }]
        },
        {
          name: "TENS",
          explanation: "Transcutaneous electrical nerve stimulation uses electrical pulses to reduce pain signals.",
          comparisonTags: [{
          id: "tens",
          label: "TENS",
          explanation: "This tag groups these two elements broadly; it does not mean the elements are identical."
        }]
        },
        {
          name: "Scrambler therapy",
          explanation: "Uses electrical signals to make the brain think there is no pain.",
          comparisonTags: [{
          id: "scrambler-therapy",
          label: "Scrambler therapy",
          explanation: "This tag groups these two elements broadly; it does not mean the elements are identical."
        }]
        }
      ],
      lifestyle: [
        {
          name: "Blood sugar control",
          explanation: "Managing blood glucose levels if diabetic to prevent further nerve damage.",
          comparisonTags: [{
          id: "blood-sugar-control",
          label: "Blood sugar control",
          explanation: "This tag groups these two elements broadly; it does not mean the elements are identical."
        }]
        },
        {
          name: "Dietary changes",
          explanation: "Increasing vitamin intake through diet to support nerve health.",
          comparisonTags: [{
          id: "dietary-changes",
          label: "Dietary changes",
          explanation: "This tag groups these two elements broadly; it does not mean the elements are identical."
        }]
        },
        {
          name: "Exercise",
          explanation: "Regular physical activity to maintain strength, circulation, and mobility.",
          comparisonTags: [{
          id: "exercise",
          label: "Exercise",
          explanation: "This tag groups these two elements broadly; it does not mean the elements are identical."
        }]
        },
        {
          name: "Reduce smoking and alcohol",
          explanation: "Avoiding substances that can worsen nerve damage and inflammation.",
          comparisonTags: [{
          id: "reduce-smoking-and-alcohol",
          label: "Reduce smoking and alcohol",
          explanation: "This tag groups these two elements broadly; it does not mean the elements are identical."
        }]
        }
      ]
    },
    diagnosis: [
      {
        name: "Thyroid problems check",
        explanation: "Testing thyroid function as thyroid disorders can contribute to neuropathy."
      },
      {
        name: "B12 levels test",
        explanation: "Measuring vitamin B12 to identify deficiencies that cause nerve damage.",
        comparisonTags: [{
          id: "blood-testing",
          label: "Blood testing",
          explanation: "These entries describe diagnosis that uses a blood sample."
        }]
      },
      {
        name: "Kidney disease screening",
        explanation: "Testing kidney function as kidney disease can be a cause of neuropathy."
      },
      {
        name: "Gait examination",
        explanation: "Observing how a patient walks to assess balance, coordination, and nerve function."
      },
      {
        name: "Monofilament test",
        explanation: "Using a nylon filament on the toes to determine if the patient can feel touch and sensation."
      }
    ],
    sources: [
      {
        organization: "Mayo Clinic",
        url: "https://www.mayoclinic.org/diseases-conditions/peripheral-neuropathy/symptoms-causes/syc-20352061"
      },
      {
        organization: "First Choice Neurology",
        url: "https://www.fcneurology.net/neuropathy-awareness-week-types-and-treatments/"
      },
      {
        organization: "National Institutes of Health (NIH)",
        url: "https://www.ninds.nih.gov/disorders/peripheral_neuropathy"
      }
    ],
    disclaimer: "IMPORTANT: This information does not substitute for professional medical evaluation. It only serves the purpose of educating the general audience. If you require medical assistance, please contact your doctor or call 911."
  },
  {
    id: "myasthenia-gravis",
    name: "Myasthenia Gravis",
    category: "Junction",
    globalCases: "*700,000",
    description: "Myasthenia Gravis is a chronic autoimmune neuromuscular disorder characterized by the breaking down of communication pathways between neurons and muscles. This can lead to muscle weakness and loss of control mainly in the face, throat, arms, and legs. A hallmark is that muscle fatigue increases over time during exertion.\n\nNeurotransmitters (NTs) are chemicals that neurons use to communicate. Acetylcholine is a specific NT that binds to receptors on the muscle to activate the process for contraction. In Myasthenia Gravis, antibodies made by the body start to attack receptors, specifically acetylcholine receptors, on muscle fibers. Due to the absence of receptors, acetylcholine from the motor neuron cannot activate muscle fibers.",
    facts: ["Autoimmune disorder", "Progressive muscle fatigue"],
    ageOfOnset: "People younger than 40 were mostly female; people older than 60 were mostly male",
    sectionOverviews: {
      causes: "The primary cause of Myasthenia Gravis is autoimmune dysfunction. This is where the immune system mistakenly attacks health acetylcholine receptors, which is essential for muscle contraction. In some cases, the thymus gland can produce the antibodies that attack receptors. ",
      symptoms: "Symptoms often progress and get worse over a period of time. The hallmark of Myasthenia Gravis is that muscle fatigue increases over time during exertion. ",
      treatments: "Your treatment depends on your symtoms, severity, and age. Many of the medication either aims to improve communication between receptors and neurons or target the immune system. Surgery may be an option for some individuals as removing the thymus gland may alleviate some symptoms; however, this is not a cure.",
      diagnosis: "Diagnosis will be done by a health professional and may include reviews of medical history, physical examination, and neurological examination. These will be used to determine how the muscles are functioning and if there is any weakness."
    },
    causes: [
      {
        name: "Autoimmune disease",
        explanation: "The immune system mistakenly attacks healthy acetylcholine receptors on muscle fibers.",
        comparisonTags: [{
          id: "autoimmune",
          label: "Autoimmune-related causes",
          explanation: "These entries broadly describe disease causes involving the immune system attacking the body's own tissues."
        }]
      },
      {
        name: "Genetic predisposition",
        explanation: "Several genetic factors can make someone more susceptible to developing Myasthenia Gravis.",
        comparisonTags: [{
          id: "genetic-factors",
          label: "Genetic factors",
          explanation: "These entries broadly describe inherited or genetic contributions."
        }]
      },
      {
        name: "Thymus gland abnormalities",
        explanation: "The thymus gland sometimes produces antibodies that attack receptors, and some patients have thymomas (tumors in the thymus)."
      },
      {
        name: "Other causes",
        explanation: "Illness, infection, other antibody diseases, pregnancy, menstrual periods, stress, and surgery can contribute to development.",
        comparisonTags: [{
          id: "infections",
          label: "Infections",
          explanation: "These entries broadly include infections or illness-related contributors."
        }]
      }
    ],
    symptoms: [
      {
        name: "Eye muscle weakness",
        explanation: "Drooping of one or both eyelids (ptosis) and double vision (diplopia) occur due to weakened eye muscles."
      },
      {
        name: "Facial and throat muscle weakness",
        explanation: "Difficulty with swallowing, chewing, and controlling facial expressions due to muscle fatigue.",
        comparisonTags: [{
          id: "chewing-swallowing-difficulty",
          label: "Chewing or swallowing difficulties",
          explanation: "These entries broadly describe difficulty chewing or swallowing."
        }]
      },
      {
        name: "Neck and limb muscle weakness",
        explanation: "Weakness in the arms, hands, fingers, legs, and neck that worsens with exertion.",
        comparisonTags: [{
          id: "muscle-weakness",
          label: "Muscle weakness",
          explanation: "Both entries describe reduced muscle strength, but the symptom wording and clinical context differ. This tag groups them broadly; it does not mean the symptoms are identical."
        }, {
          id: "activity-related-fatigue",
          label: "Activity-related fatigue or weakness",
          explanation: "These entries broadly describe fatigue or weakness associated with muscle activity."
        }]
      },
      {
        name: "Shortness of breath",
        explanation: "Weakness in respiratory muscles can be severe enough to cause a myasthenic crisis requiring emergency care.",
        comparisonTags: [{
          id: "breathing-difficulties",
          label: "Breathing difficulties",
          explanation: "These entries broadly describe difficulty breathing."
        }]
      }
    ],
    treatments: {
      medication: [
        {
          name: "Anticholinesterase medications",
          explanation: "Pyridostigmine enhances communication between dysfunctional receptors and motor neurons.",
          comparisonTags: [{
            id: "acetylcholinesterase-inhibitors",
            label: "Acetylcholinesterase-inhibiting medication",
            explanation: "These entries broadly describe medication that affects acetylcholinesterase activity."
          }]
        },
        {
          name: "Immunosuppressants",
          explanation: "Corticosteroids block the immune system but can cause significant side effects like liver or kidney damage.",
          comparisonTags: [{
            id: "immunosuppressive-medication",
            label: "Immunosuppressive medication",
            explanation: "These entries broadly describe medication that suppresses immune activity."
          }]
        },
        {
          name: "Intravenous therapy",
          explanation: "Short-term treatment for symptoms that suddenly aggravate or worsen."
        },
        {
          name: "Plasmapheresis",
          explanation: "A procedure that filters blood to remove antibodies present in Myasthenia Gravis."
        },
        {
          name: "Intravenous immunoglobulin",
          explanation: "Provides the body with typical antibodies and alters the immune response.",
          comparisonTags: [{
            id: "intravenous-immunoglobulin",
            label: "Intravenous immunoglobulin (IVIG)",
            explanation: "These entries refer broadly to intravenous immunoglobulin treatment."
          }]
        },
        {
          name: "Rituximab",
          explanation: "Targets proteins on B-cells to suppress the immune response."
        },
        {
          name: "Neonatal Fc receptor blockers",
          explanation: "Block proteins that carry antibodies, lowering the amount of antibodies causing symptoms."
        },
        {
          name: "Other monoclonal antibodies",
          explanation: "Eculizumab, ravulizumab, zilucoplan, and chimeric antigen receptor T-cell therapy are newer treatment options."
        }
      ],
      surgery: [
        {
          name: "Thymectomy",
          explanation: "Surgical removal of the thymus gland, especially effective in patients with thymomas."
        }
      ],
      therapy: [
        {
          name: "Gentle exercise",
          explanation: "Low-intensity physical activity to maintain strength without excessive fatigue."
        },
        {
          name: "Physical therapy",
          explanation: "Structured exercises to improve muscle function and mobility."
        },
        {
          name: "Energy conservation",
          explanation: "Techniques to manage daily activities while minimizing muscle fatigue."
        }
      ]
    },
    diagnosis: [
      {
        name: "Physical and neurological examination",
        explanation: "Assessment of reflexes, muscle strength, muscle tone, sense of touch and vision, coordination, and balance.",
        comparisonTags: [{
          id: "neurological-examination",
          label: "Neurological examination",
          explanation: "These entries broadly describe a clinical examination of neurological function."
        }]
      },
      {
        name: "Ice pack test",
        explanation: "Placing an ice pack on the eyelid to see if drooping improves, which suggests Myasthenia Gravis."
      },
      {
        name: "Blood test",
        explanation: "Testing for antibodies against acetylcholine receptors or muscle-specific kinase.",
        comparisonTags: [{
          id: "blood-testing",
          label: "Blood testing",
          explanation: "These entries describe diagnosis that uses a blood sample."
        }]
      },
      {
        name: "Imaging",
        explanation: "MRI or CT scans check for tumors (thymomas) in the thymus gland.",
        comparisonTags: [{
          id: "diagnostic-imaging",
          label: "Diagnostic imaging",
          explanation: "These entries broadly describe imaging used during diagnosis."
        }]
      },
      {
        name: "Repeated nerve stimulation",
        explanation: "Electrodiagnostic test that measures whether muscles are receiving signals from nerves.",
        comparisonTags: [{
          id: "repetitive-nerve-stimulation",
          label: "Repetitive nerve stimulation testing",
          explanation: "These entries broadly describe nerve stimulation tests used in diagnosis."
        }]
      },
      {
        name: "Single fiber electromyography (EMG)",
        explanation: "Specialized test that can detect impaired nerve to muscle transmission.",
        comparisonTags: [{
          id: "electromyography",
          label: "Electromyography (EMG)",
          explanation: "These entries broadly describe diagnostic tests that measure electrical activity in muscles or nerves."
        }]
      }
    ],
    sources: [
      {
        organization: "Mayo Clinic",
        url: "https://www.mayoclinic.org/diseases-conditions/myasthenia-gravis/symptoms-causes/syc-20352036"
      },
      {
        organization: "Medline Plus",
        url: "https://medlineplus.gov/myastheniagravis.html"
      },
      {
        organization: "National Institutes of Health (NIH)",
        url: "https://www.ninds.nih.gov/health-information/disorders/myasthenia-gravis"
      }
    ],
    disclaimer: "IMPORTANT: This information does not substitute for professional medical evaluation. It only serves the purpose of educating the general audience. If you require medical assistance, please contact your doctor or call 911."
  },
  {
    id: "als",
    name: "Amyotrophic Lateral Sclerosis (ALS)",
    category: "Neuron",
    globalCases: "330,000-400,000",
    description: "Amyotrophic Lateral Sclerosis (ALS) is a progressive neurodegenerative disease that affects nerves in the brain and spinal cord. This can lead to muscle weakness and numerous symptoms that get worse over time.\n\nALS mainly affects motor neurons in the brain and spinal cord. Motor neurons coordinate voluntary muscle movement and breathing, causing twitching (fasciculations) and wasting away (atrophy). Since this disease is progressive, voluntary movements like walking, chewing, and talking become unattainable.\n\nThe hallmark of Amyotrophic Lateral Sclerosis (ALS) is progressive, painless muscle weakness paired with muscle wasting (atrophy) and twitching (fasciculations).",
    facts: ["Progressive motor neuron damage", "Voluntary movements become difficult"],
    ageOfOnset: "ALS can happen at any age; however, ages 55–75 are more susceptible",
    sectionOverviews: {
      causes: "The root cause for ALS is unknown right now but mixed factors between genetics and environmental aspects can contribute to development.",
      symptoms: "Symptoms vary from person to person and depend on which nerve has been affected. ALS usually starts in the hands, feet, arms or legs and then eventually spreads to other parts of the body. Pain is usually not common in all stages of ALS but can happen.",
      treatments: "Treatments for ALS are limited and mainly focus on slowing the progression of the disease and managing symptoms. Since the cause is unknown, treatments are not curative. However, therapy, medication, and lifestyle changes can help improve quality of life.",
      diagnosis: "It is important to diagnose ALS as soon as possible as treatments are effective as soon as symptoms start. However, diagnosing during early stages is difficult as symptoms are similar to other diseases. Many symptoms are exclusionary tools, meaning they rule out ALS instead of diagnosing ALS."
    },
    causes: [
      {
        name: "Genetics",
        explanation: "About 10% of people with ALS had it passed down by a family member.",
        comparisonTags: [{
          id: "genetic-factors",
          label: "Genetic factors",
          explanation: "These entries broadly describe inherited or genetic contributions."
        }]
      },
      {
        name: "Environmental toxin exposure",
        explanation: "Exposure to environmental toxins may contribute to ALS development (weak link).",
        comparisonTags: [{
          id: "environmental-exposure",
          label: "Environmental exposure",
          explanation: "These entries broadly describe environmental exposures that may contribute to disease or nerve damage."
        }]
      },
      {
        name: "Smoking",
        explanation: "Smoking is a risk factor associated with ALS development."
      },
      {
        name: "Military service",
        explanation: "Military service has been associated with ALS development (weak link)."
      }
    ],
    symptoms: [
      {
        name: "Muscle twitches",
        explanation: "Involuntary twitches (fasciculations) in the arms, legs, and shoulders caused by nerve degeneration."
      },
      {
        name: "Muscle cramping and weakness",
        explanation: "Cramping, tightness, and weakness in muscles due to motor neuron degeneration.",
        comparisonTags: [{
          id: "muscle-weakness",
          label: "Muscle weakness",
          explanation: "Both entries describe reduced muscle strength, but the symptom wording and clinical context differ. This tag groups them broadly; it does not mean the symptoms are identical."
        }]
      },
      {
        name: "Slurred speech",
        explanation: "Difficulty speaking clearly due to weakness in muscles controlling speech."
      },
      {
        name: "Difficulty chewing and swallowing",
        explanation: "Weakness in muscles used for eating makes these functions difficult (dysphagia).",
        comparisonTags: [{
          id: "chewing-swallowing-difficulty",
          label: "Chewing or swallowing difficulties",
          explanation: "These entries broadly describe difficulty chewing or swallowing."
        }]
      },
      {
        name: "Later symptoms",
        explanation: "As the disease progresses, additional symptoms include excessive salivation (sialorrhea), difficulty speaking (dysarthria), breathing difficulty (dyspnea), unintended emotional displays, and difficulty maintaining a healthy diet or weight.",
        comparisonTags: [{
          id: "breathing-difficulties",
          label: "Breathing difficulties",
          explanation: "These entries broadly describe difficulty breathing."
        }]
      }
    ],
    treatments: {
      medication: [
        {
          name: "Riluzole (Tiglutik)",
          explanation: "Taken by mouth, it extends life expectancy by stopping nerve cells from getting damaged; major side effect includes liver injury."
        },
        {
          name: "Edaravone (Radicava)",
          explanation: "Taken by vein in the arm or by mouth, it reduces the speed of decline in daily functioning."
        },
        {
          name: "Toferesen (Qalsody)",
          explanation: "Injection through cerebrospinal fluid during a spinal tap, approved for people with ALS who have a specific gene change."
        }
      ],
      therapy: [
        {
          name: "Breathing care",
          explanation: "Support for respiratory function as breathing muscles weaken."
        },
        {
          name: "Speech therapy",
          explanation: "Techniques to maintain communication as speech becomes difficult."
        },
        {
          name: "Physical therapy",
          explanation: "Exercises to maintain strength and mobility as long as possible."
        },
        {
          name: "Nutritional support",
          explanation: "Specialized nutrition planning as swallowing becomes difficult."
        },
        {
          name: "Psychological and social support",
          explanation: "Mental health and community support to address emotional challenges."
        }
      ],
      lifestyle: [
        {
          name: "High-calorie nutrition",
          explanation: "Consuming calorie-dense foods to maintain weight and energy as the disease progresses."
        },
        {
          name: "Moderate low-impact exercise",
          explanation: "Gentle physical activity to maintain mobility without overexertion.",
          comparisonTags: [{
            id: "exercise",
            label: "Exercise",
            explanation: "These entries broadly describe physical activity used to support strength or mobility."
          }]
        }
      ]
    },
    diagnosis: [
      {
        name: "Electromyogram (EMG)",
        explanation: "A needle is inserted through the skin to record electrical activity, measuring muscle to nerve communication during contraction and resting stages.",
        comparisonTags: [{
          id: "electromyography",
          label: "Electromyography (EMG)",
          explanation: "These entries broadly describe diagnostic tests that measure electrical activity in muscles or nerves."
        }]
      },
      {
        name: "Nerve conduction study",
        explanation: "Measures a nerve's ability to send impulses to muscles around the body."
      },
      {
        name: "Blood and urine tests",
        explanation: "May help eliminate other causes of symptoms, since early ALS is difficult to diagnose.",
        comparisonTags: [{
          id: "blood-testing",
          label: "Blood testing",
          explanation: "These entries describe diagnosis that uses a blood sample."
        }]
      },
      {
        name: "Spinal tap (lumbar puncture)",
        explanation: "Removes spinal fluid from the back to eliminate other factors causing symptoms."
      },
      {
        name: "Muscle biopsy",
        explanation: "Sometimes shows signs of another muscle disease rather than ALS."
      },
      {
        name: "Magnetic Resonance Imaging (MRI)",
        explanation: "Produces detailed images of the brain and spinal cord using powerful radio waves and a magnetic field; used to rule out other conditions and sometimes diagnose ALS.",
        comparisonTags: [{
          id: "diagnostic-imaging",
          label: "Diagnostic imaging",
          explanation: "These entries broadly describe imaging used during diagnosis."
        }]
      }
    ],
    sources: [
      {
        organization: "ALS Association",
        url: "https://www.als.org/navigating-als/living-with-als/therapies-care/mobility-als/strategies-maintaining-mobility"
      },
      {
        organization: "Mayo Clinic",
        url: "https://www.mayoclinic.org/diseases-conditions/amyotrophic-lateral-sclerosis/symptoms-causes/syc-20354022"
      },
      {
        organization: "National Institutes of Health (NIH)",
        url: "https://www.ninds.nih.gov/health-information/disorders/amyotrophic-lateral-sclerosis-als"
      }
    ],
    disclaimer: "IMPORTANT: This information does not substitute for professional medical evaluation. It only serves the purpose of educating the general audience. If you require medical assistance, please contact your doctor or call 911. It is important to diagnose ALS as soon as possible, as treatments are effective when started early. However, diagnosing ALS during early stages is difficult, as symptoms are similar to other diseases."
  },
  {
    id: "lems",
    name: "Lambert-Eaton Myasthenic Syndrome (LEMS) (content generated by AI for simulation purposes)",
    category: "Junction",
    globalCases: "0.5–3 per million",
    description: "Lambert-Eaton Myasthenic Syndrome (LEMS) is a rare autoimmune neuromuscular junction disorder caused by antibodies that attack voltage-gated calcium channels (VGCCs) at the junction between nerves and muscles. This impairs the release of acetylcholine and causes progressive muscle weakness, particularly in the legs.\n\nUnlike Myasthenia Gravis, which typically presents with eye and facial weakness, LEMS primarily affects proximal muscles (hips, shoulders, and thighs) and may improve with sustained muscle use or repetitive activity. LEMS is often associated with small-cell lung cancer, and muscle weakness may be the first sign of malignancy.\n\nSymptoms include muscle weakness, autonomic dysfunction (dry mouth, constipation, impotence), and diminished or absent deep tendon reflexes.",
    facts: ["Autoimmune neuromuscular junction disorder", "Often associated with lung cancer"],
    ageOfOnset: "Can occur at any age; typically diagnosed in adults aged 40–60",
    sectionOverviews: {
      causes: "LEMS is primarily caused by an autoimmune response where the body produces antibodies against voltage-gated calcium channels (VGCCs). These antibodies impair calcium influx needed for acetylcholine release at the neuromuscular junction. About 50–60% of LEMS cases are associated with small-cell lung cancer (SCLC).",
      symptoms: "LEMS typically begins with proximal muscle weakness in the legs, progressing upward to affect the arms and trunk. A key distinguishing feature is that weakness may improve with sustained activity or exercise, unlike in Myasthenia Gravis. Autonomic symptoms are also common.",
      treatments: "Treatment focuses on improving neuromuscular transmission, managing symptoms, and treating any underlying cancer. Medications enhance acetylcholine release, while immunosuppressive therapies target the autoimmune response.",
      diagnosis: "Diagnosis involves specialized nerve conduction studies showing an incremental response to repetitive stimulation, serology testing for anti-VGCC antibodies, and imaging to screen for underlying malignancy."
    },
    causes: [
      {
        name: "Autoimmune attack on voltage-gated calcium channels",
        explanation: "Antibodies target VGCCs on nerve terminals, preventing calcium influx needed for acetylcholine release.",
        comparisonTags: [{
          id: "autoimmune",
          label: "Autoimmune-related causes",
          explanation: "These entries broadly describe disease causes involving the immune system attacking the body's own tissues."
        }]
      },
      {
        name: "Genetic predisposition",
        explanation: "Certain genetic factors increase susceptibility to developing autoimmune LEMS.",
        comparisonTags: [{
          id: "genetic-factors",
          label: "Genetic factors",
          explanation: "These entries broadly describe inherited or genetic contributions."
        }]
      },
      {
        name: "Small-cell lung cancer association",
        explanation: "50–60% of LEMS cases are paraneoplastic, occurring alongside or preceding lung cancer diagnosis."
      },
      {
        name: "Other autoimmune conditions",
        explanation: "LEMS can co-occur with other autoimmune disorders such as thyroiditis or pernicious anemia.",
        comparisonTags: [{
          id: "autoimmune",
          label: "Autoimmune-related causes",
          explanation: "These entries broadly describe disease causes involving the immune system attacking the body's own tissues."
        }]
      }
    ],
    symptoms: [
      {
        name: "Proximal muscle weakness",
        explanation: "Weakness in hip, shoulder, and thigh muscles that worsens with fatigue but may improve with sustained activity.",
        comparisonTags: [{
          id: "muscle-weakness",
          label: "Muscle weakness",
          explanation: "Both MG and LEMS cause muscle weakness, but LEMS primarily affects proximal muscles and may improve with activity, whereas MG worsens with use."
        }]
      },
      {
        name: "Difficulty walking and climbing stairs",
        explanation: "Proximal leg weakness makes ambulation and climbing difficult; patients may report a waddling gait.",
        comparisonTags: [{
          id: "mobility-difficulties",
          label: "Mobility difficulties",
          explanation: "These entries broadly describe difficulties with moving around."
        }]
      },
      {
        name: "Dry mouth (xerostomia)",
        explanation: "Autonomic dysfunction reduces salivary gland secretion, causing persistent dry mouth."
      },
      {
        name: "Constipation and autonomic dysfunction",
        explanation: "Impaired autonomic nerve function affects bowel motility and can cause constipation, erectile dysfunction, and blurred vision.",
        comparisonTags: [{
          id: "digestive-complications",
          label: "Digestive symptoms",
          explanation: "These entries broadly describe digestive symptoms."
        }]
      },
      {
        name: "Diminished or absent reflexes (hyporeflexia)",
        explanation: "Deep tendon reflexes are reduced or absent due to impaired neuromuscular transmission; a hallmark distinguishing feature from other myasthenias."
      },
      {
        name: "Fatigue",
        explanation: "General muscle fatigue and tiredness, though unlike MG, weakness may improve temporarily with continued use.",
        comparisonTags: [{
          id: "activity-related-fatigue",
          label: "Activity-related fatigue or weakness",
          explanation: "These entries broadly describe fatigue or weakness associated with muscle activity."
        }]
      }
    ],
    treatments: {
      medication: [
        {
          name: "3,4-Diaminopyridine (3,4-DAP)",
          explanation: "Blocks potassium channels to prolong the action potential and increase calcium influx, enhancing acetylcholine release."
        },
        {
          name: "Pyridostigmine",
          explanation: "Anticholinesterase that increases acetylcholine availability at the neuromuscular junction; less effective in LEMS than in MG.",
          comparisonTags: [{
            id: "acetylcholinesterase-inhibitors",
            label: "Acetylcholinesterase-inhibiting medication",
            explanation: "These entries broadly describe medication that affects acetylcholinesterase activity."
          }]
        },
        {
          name: "Immunosuppressants (corticosteroids, azathioprine)",
          explanation: "Suppress immune system activity and reduce antibody production against voltage-gated calcium channels.",
          comparisonTags: [{
            id: "immunosuppressive-medication",
            label: "Immunosuppressive medication",
            explanation: "These entries broadly describe medication that suppresses immune activity."
          }]
        },
        {
          name: "Intravenous immunoglobulin (IVIG)",
          explanation: "Provides normal antibodies and modulates immune response; used for acute exacerbations.",
          comparisonTags: [{
            id: "intravenous-immunoglobulin",
            label: "Intravenous immunoglobulin (IVIG)",
            explanation: "These entries refer broadly to intravenous immunoglobulin treatment."
          }]
        }
      ],
      therapy: [
        {
          name: "Plasmapheresis",
          explanation: "Removes harmful antibodies from the blood to provide short-term symptom relief during acute episodes."
        },
        {
          name: "Physical therapy",
          explanation: "Gentle exercise to maintain muscle strength and improve mobility without causing excessive fatigue."
        },
        {
          name: "Cancer screening and treatment",
          explanation: "Regular imaging (CT chest) to screen for small-cell lung cancer; treatment of cancer if present improves LEMS symptoms."
        }
      ],
      lifestyle: [
        {
          name: "Planned activity and pacing",
          explanation: "Engaging in sustained low-intensity activity can temporarily improve strength; proper pacing prevents exhaustion.",
          comparisonTags: [{
            id: "exercise",
            label: "Exercise",
            explanation: "These entries broadly describe physical activity used to support strength or mobility."
          }]
        },
        {
          name: "Autonomic symptom management",
          explanation: "Managing dry mouth (frequent sips, sugar-free gum) and constipation (dietary fiber, hydration, stool softeners)."
        }
      ]
    },
    diagnosis: [
      {
        name: "Repetitive nerve stimulation (RNS)",
        explanation: "Electrodiagnostic test showing an incremental response (increasing muscle action potential amplitude) with high-frequency stimulation; distinguishes LEMS from MG.",
        comparisonTags: [{
          id: "repetitive-nerve-stimulation",
          label: "Repetitive nerve stimulation testing",
          explanation: "These entries broadly describe nerve stimulation tests used in diagnosis."
        }]
      },
      {
        name: "Serology for anti-VGCC antibodies",
        explanation: "Blood test detecting antibodies against voltage-gated calcium channels (P/Q-type or N-type); positive in 85% of LEMS cases.",
        comparisonTags: [{
          id: "blood-testing",
          label: "Blood testing",
          explanation: "These entries describe diagnosis that uses a blood sample."
        }]
      },
      {
        name: "Single-fiber electromyography (EMG)",
        explanation: "Specialized test detecting impaired neuromuscular transmission with increased jitter and blocking.",
        comparisonTags: [{
          id: "electromyography",
          label: "Electromyography (EMG)",
          explanation: "These entries broadly describe diagnostic tests that measure electrical activity in muscles or nerves."
        }]
      },
      {
        name: "Chest imaging (CT or X-ray)",
        explanation: "Screening for underlying small-cell lung cancer; recommended for all newly diagnosed LEMS patients.",
        comparisonTags: [{
          id: "diagnostic-imaging",
          label: "Diagnostic imaging",
          explanation: "These entries broadly describe imaging used during diagnosis."
        }]
      },
      {
        name: "Neurological examination",
        explanation: "Assessment of muscle strength, reflexes (hyporeflexia is characteristic), and autonomic symptoms.",
        comparisonTags: [{
          id: "neurological-examination",
          label: "Neurological examination",
          explanation: "These entries broadly describe a clinical examination of neurological function."
        }]
      },
      {
        name: "Clinical history and symptom review",
        explanation: "Identification of proximal weakness pattern, autonomic symptoms, and improvement with sustained activity."
      }
    ],
    sources: [
      {
        organization: "Mayo Clinic",
        url: "https://www.mayoclinic.org/diseases-conditions/lambert-eaton-myasthenic-syndrome/symptoms-causes/syc-20374088"
      },
      {
        organization: "National Institutes of Health (NIH)",
        url: "https://www.ninds.nih.gov/health-information/disorders/lambert-eaton-myasthenic-syndrome"
      },
      {
        organization: "Muscular Dystrophy Association",
        url: "https://www.mda.org/disease/lambert-eaton-myasthenic-syndrome"
      }
    ],
    disclaimer: "**AI TEST DO NOT USE** — This LEMS entry is placeholder test data for comparison feature validation only. IMPORTANT: This information does not substitute for professional medical evaluation. It only serves the purpose of educating the general audience. If you require medical assistance, please contact your doctor or call 911."
  }
];

function createComparisonTagId(section, entryName) {
  const slug = entryName
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  return `${section}-${slug}`;
}

function ensureComparisonTags(entries, section) {
  (entries || []).forEach(entry => {
    if (typeof entry === 'string' || entry.comparisonTags?.length) return;

    entry.comparisonTags = [{
      id: createComparisonTagId(section, entry.name),
      label: entry.name,
      explanation: `This is a ${section} concept. Reuse its tag ID for entries with the same meaning, even if they are worded differently.`
    }];
  });
}

diseases.forEach(disease => {
  ensureComparisonTags(disease.causes, 'cause');
  ensureComparisonTags(disease.symptoms, 'symptom');
  ensureComparisonTags(disease.diagnosis, 'diagnosis');
  Object.entries(disease.treatments || {}).forEach(([type, entries]) => {
    ensureComparisonTags(entries, `treatment-${type}`);
  });
});