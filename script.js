const jambQuestions = {
  english: [
    {
      q: "Choose the word nearest in meaning to: The judge was **incorruptible**.",
      o: ["Honest", "Strict", "Kind", "Cruel"],
      a: 0,
    },
    {
      q: "Choose the word opposite in meaning to: The room was **spacious**.",
      o: ["Wide", "Cramped", "Empty", "Large"],
      a: 1,
    },
    {
      q: "Neither the principal nor the teachers ___ arrived.",
      o: ["has", "have", "is", "was"],
      a: 1,
    },
    {
      q: "Stress: Which syllable is stressed in 'REMARKABLE'?",
      o: ["1st", "2nd", "3rd", "4th"],
      a: 1,
    },
    {
      q: "Opposite: He is known for his **altruistic** nature.",
      o: ["Selfish", "Kind", "Generous", "Mean"],
      a: 0,
    },
    {
      q: "Vowel: Which word has the same sound as /i:/ in 'TEAM'?",
      o: ["Sit", "Believe", "Great", "Bear"],
      a: 1,
    },
    {
      q: "Nearest: The rain was **intermittent** throughout the day.",
      o: ["Heavy", "Stopping and starting", "Constant", "Light"],
      a: 1,
    },
    {
      q: "Sentence completion: If I ___ you, I would take the offer.",
      o: ["am", "was", "were", "be"],
      a: 2,
    },
    {
      q: "Choose the correctly spelt word.",
      o: ["Occurrence", "Occurence", "Ocurrence", "Occurance"],
      a: 0,
    },
    {
      q: "Nearest: His argument was **cogent**.",
      o: ["Weak", "Convincing", "Confusing", "Long"],
      a: 1,
    },
    {
      q: "Opposite: The soldier showed **valour** in battle.",
      o: ["Bravery", "Cowardice", "Strength", "Fear"],
      a: 1,
    },
    {
      q: "Stress: 'EDUCATION'",
      o: ["ED-ucation", "ed-u-CA-tion", "ed-UC-ation", "educa-TION"],
      a: 1,
    },
    {
      q: "Fill the gap: You had better ___ early.",
      o: ["left", "leave", "leaves", "leaving"],
      a: 1,
    },
    {
      q: "Idiom: To 'kick the bucket' means to:",
      o: ["Play football", "Die", "Be angry", "Clean up"],
      a: 1,
    },
    {
      q: "Nearest: The lady was **pensive**.",
      o: ["Happy", "Thoughtful", "Rich", "Beautiful"],
      a: 1,
    },
    {
      q: "Vowel: /æ/ as in 'CAT'?",
      o: ["Father", "Plait", "Car", "Call"],
      a: 1,
    },
    {
      q: "Opposite: The boy is **industrious**.",
      o: ["Lazy", "Hardworking", "Clever", "Noisy"],
      a: 0,
    },
    {
      q: "Completion: She has been here ___ 8 o'clock.",
      o: ["for", "since", "from", "at"],
      a: 1,
    },
    {
      q: "Consonant: /ʃ/ as in 'SHE'?",
      o: ["Cheap", "Ocean", "Character", "City"],
      a: 1,
    },
    {
      q: "Nearest: The decision was **unanimous**.",
      o: ["Quick", "In total agreement", "Divided", "Wrong"],
      a: 1,
    },
    {
      q: "Opposite: The water is **shallow**.",
      o: ["Deep", "Clear", "Dirty", "Cold"],
      a: 0,
    },
    {
      q: "Completion: The news ___ disappointing.",
      o: ["are", "is", "were", "have been"],
      a: 1,
    },
    {
      q: "Stress: 'PHOTOGRAPH' (Noun)",
      o: ["1st syllable", "2nd syllable", "3rd syllable", "All"],
      a: 0,
    },
    {
      q: "Idiom: 'A bone of contention' means:",
      o: [
        "A tasty meal",
        "A cause of dispute",
        "Part of a skeleton",
        "A peace treaty",
      ],
      a: 1,
    },
    {
      q: "Nearest: The smell was **pungent**.",
      o: ["Sweet", "Strong and sharp", "Faint", "Pleasant"],
      a: 1,
    },
    {
      q: "Opposite: He is an **extrovert**.",
      o: ["Introvert", "Loud person", "Traveler", "Leader"],
      a: 0,
    },
    {
      q: "Vowel: /u:/ as in 'POOL'?",
      o: ["Book", "Should", "Blue", "Pull"],
      a: 2,
    },
    {
      q: "Completion: One of the boys ___ missing.",
      o: ["are", "were", "is", "have"],
      a: 2,
    },
    {
      q: "Spelling: Select the correct one.",
      o: ["Maintenance", "Maintainance", "Maintenence", "Maintainence"],
      a: 0,
    },
    {
      q: "Nearest: The evidence was **corroborated**.",
      o: ["Rejected", "Confirmed", "Hidden", "Ignored"],
      a: 1,
    },
    {
      q: "Opposite: The clouds are **opaque**.",
      o: ["Dark", "Transparent", "Heavy", "White"],
      a: 1,
    },
    {
      q: "Consonant: /f/ as in 'FAN'?",
      o: ["Of", "Laugh", "Step", "Very"],
      a: 1,
    },
    { q: "Stress: 'ACADEMIC'", o: ["1st", "2nd", "3rd", "4th"], a: 2 },
    {
      q: "Completion: I look forward to ___ you.",
      o: ["see", "seeing", "seen", "be seeing"],
      a: 1,
    },
    {
      q: "Idiom: 'At the eleventh hour' means:",
      o: ["Early", "At 11 PM", "At the last moment", "Never"],
      a: 2,
    },
    {
      q: "Nearest: The task was **arduous**.",
      o: ["Simple", "Difficult", "Interesting", "Short"],
      a: 1,
    },
    {
      q: "Opposite: The meeting was **protracted**.",
      o: ["Shortened", "Long", "Delayed", "Cancelled"],
      a: 0,
    },
    {
      q: "Vowel: /ɔ:/ as in 'PORT'?",
      o: ["Pot", "Bought", "Lot", "What"],
      a: 1,
    },
    {
      q: "Completion: He prefers tea ___ coffee.",
      o: ["than", "to", "over", "against"],
      a: 1,
    },
    {
      q: "Consonant: /z/ as in 'ZOO'?",
      o: ["Books", "Houses", "Rice", "Price"],
      a: 1,
    },
    {
      q: "Nearest: The man is **affluent**.",
      o: ["Poor", "Wealthy", "Sick", "Famous"],
      a: 1,
    },
    {
      q: "Opposite: The child is **docile**.",
      o: ["Quiet", "Stubborn", "Gentle", "Small"],
      a: 1,
    },
    { q: "Stress: 'IMPOSSIBLE'?", o: ["1st", "2nd", "3rd", "4th"], a: 1 },
    {
      q: "Spelling: Correct one?",
      o: ["Accommodation", "Acommodation", "Accomodation", "Acomodation"],
      a: 0,
    },
    {
      q: "Idiom: 'To see eye to eye' means:",
      o: ["To stare", "To agree", "To fight", "To blink"],
      a: 1,
    },
    {
      q: "Nearest: The weather is **erratic**.",
      o: ["Unpredictable", "Cold", "Sunny", "Stable"],
      a: 0,
    },
    {
      q: "Opposite: The food was **palatable**.",
      o: ["Tasty", "Inedible", "Hot", "Cheap"],
      a: 1,
    },
    {
      q: "Completion: We divided the oranges ___ the four boys.",
      o: ["between", "among", "within", "inside"],
      a: 1,
    },
    {
      q: "Consonant: /θ/ as in 'THINK'?",
      o: ["Them", "Method", "Father", "This"],
      a: 1,
    },
    {
      q: "Nearest: The story was **brief**.",
      o: ["Long", "Short", "Sad", "True"],
      a: 1,
    },
    {
      q: "Opposite: The surface is **rugged**.",
      o: ["Smooth", "Rough", "Hard", "Tough"],
      a: 0,
    },
    { q: "Vowel: /e/ as in 'BED'?", o: ["Bead", "Says", "Gate", "Meat"], a: 1 },
    {
      q: "Completion: The car belongs to ___.",
      o: ["me and him", "him and I", "him and me", "he and I"],
      a: 2,
    },
    { q: "Stress: 'ECONOMICS'?", o: ["1st", "2nd", "3rd", "4th"], a: 2 },
    {
      q: "Idiom: 'Under the weather' means:",
      o: ["Raining", "Unwell", "Happy", "Travelling"],
      a: 1,
    },
    {
      q: "Nearest: The king was **benevolent**.",
      o: ["Cruel", "Kind", "Powerful", "Old"],
      a: 1,
    },
    {
      q: "Opposite: The land is **fertile**.",
      o: ["Barren", "Green", "Productive", "Large"],
      a: 0,
    },
    {
      q: "Completion: It's time we ___.",
      o: ["go", "gone", "went", "going"],
      a: 2,
    },
    {
      q: "Consonant: /dʒ/ as in 'JUDGE'?",
      o: ["Gear", "Giant", "Get", "Game"],
      a: 1,
    },
    {
      q: "Nearest: The student was **audacious**.",
      o: ["Quiet", "Bold", "Shy", "Dull"],
      a: 1,
    },
  ],
  biology: [
    {
      q: "Which organelle is the site of aerobic respiration?",
      o: ["Ribosome", "Nucleus", "Mitochondrion", "Lysosome"],
      a: 2,
    },
    {
      q: "The process of maintaining a constant internal environment is:",
      o: ["Osmosis", "Homeostasis", "Diffusion", "Excretion"],
      a: 1,
    },
    {
      q: "Which of the following is a function of the liver?",
      o: [
        "Urine storage",
        "Deamination",
        "Digestion of starch",
        "Pumping blood",
      ],
      a: 1,
    },
    {
      q: "The deficiency of Vitamin D causes:",
      o: ["Scurvy", "Rickets", "Beri-beri", "Night blindness"],
      a: 1,
    },
    {
      q: "The movement of water through a semi-permeable membrane is:",
      o: ["Osmosis", "Diffusion", "Active transport", "Transpiration"],
      a: 0,
    },
    {
      q: "The basic unit of classification is:",
      o: ["Genus", "Species", "Family", "Order"],
      a: 1,
    },
    {
      q: "The male sex cell in flowering plants is:",
      o: ["Ovule", "Pollen grain", "Stigma", "Style"],
      a: 1,
    },
    {
      q: "An example of a flightless bird is:",
      o: ["Pigeon", "Ostrich", "Hawk", "Eagle"],
      a: 1,
    },
    {
      q: "The structure used for gaseous exchange in insects is:",
      o: ["Gills", "Lungs", "Trachea", "Skin"],
      a: 2,
    },
    {
      q: "The part of the brain responsible for balance is:",
      o: ["Cerebrum", "Cerebellum", "Medulla", "Thalamus"],
      a: 1,
    },
    {
      q: "Which blood group is the universal donor?",
      o: ["A", "B", "AB", "O"],
      a: 3,
    },
    {
      q: "The green pigment in plants is:",
      o: ["Hemoglobin", "Chlorophyll", "Melanin", "Xanthophyll"],
      a: 1,
    },
    {
      q: "A symbiotic relationship where both benefit is:",
      o: ["Parasitism", "Commensalism", "Mutualism", "Saprophytism"],
      a: 2,
    },
    {
      q: "The enzyme in human saliva is:",
      o: ["Pepsin", "Ptyalin", "Rennin", "Lipase"],
      a: 1,
    },
    {
      q: "What is the function of red blood cells?",
      o: ["Clotting", "Oxygen transport", "Fighting disease", "Waste removal"],
      a: 1,
    },
    {
      q: "The largest organ in the human body is:",
      o: ["Liver", "Skin", "Heart", "Lungs"],
      a: 1,
    },
    {
      q: "Which plant tissue transports water?",
      o: ["Phloem", "Xylem", "Cortex", "Pith"],
      a: 1,
    },
    {
      q: "Excretion in Amoeba occurs through:",
      o: ["Contractile vacuole", "Kidney", "Skin", "Mouth"],
      a: 0,
    },
    {
      q: "The sequence of bases in mRNA is called a:",
      o: ["Gene", "Codon", "Chromosome", "Nucleotide"],
      a: 1,
    },
    {
      q: "What is the function of the gall bladder?",
      o: ["Produce bile", "Store bile", "Produce insulin", "Digest fat"],
      a: 1,
    },
    {
      q: "The powerhouse of the cell is:",
      o: ["Nucleus", "Mitochondria", "Vacuole", "Ribosome"],
      a: 1,
    },
    {
      q: "Which of these is a biotic factor?",
      o: ["Rainfall", "Temperature", "Predation", "Soil pH"],
      a: 2,
    },
    {
      q: "The theory of evolution by natural selection was by:",
      o: ["Lamarck", "Darwin", "Mendel", "Hooke"],
      a: 1,
    },
    {
      q: "Scurvy is caused by lack of:",
      o: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin K"],
      a: 2,
    },
    {
      q: "The fluid in the joints is called:",
      o: ["Plasma", "Lymph", "Synovial fluid", "Serum"],
      a: 2,
    },
    {
      q: "Photosynthesis occurs mainly in the:",
      o: ["Roots", "Stem", "Leaves", "Flowers"],
      a: 2,
    },
    {
      q: "The process of cell division for growth is:",
      o: ["Meiosis", "Mitosis", "Fertilization", "Fission"],
      a: 1,
    },
    {
      q: "Which hormone regulates blood sugar?",
      o: ["Adrenaline", "Insulin", "Thyroxine", "Estrogen"],
      a: 1,
    },
    {
      q: "The backbone is made of bones called:",
      o: ["Ribs", "Vertebrae", "Femur", "Skull"],
      a: 1,
    },
    {
      q: "Transpiration occurs through the:",
      o: ["Xylem", "Phloem", "Stomata", "Root hair"],
      a: 2,
    },
    {
      q: "The study of heredity is:",
      o: ["Ecology", "Genetics", "Physiology", "Anatomy"],
      a: 1,
    },
    {
      q: "Which of these is a demerit of self-pollination?",
      o: ["Waste of pollen", "Weak offspring", "Fast process", "Pure lines"],
      a: 1,
    },
    {
      q: "An example of a vestigial organ is:",
      o: ["Heart", "Appendix", "Liver", "Kidney"],
      a: 1,
    },
    {
      q: "The habitat of a tapeworm is:",
      o: ["Soil", "Human gut", "Water", "Air"],
      a: 1,
    },
    {
      q: "Which vessel carries deoxygenated blood to the lungs?",
      o: ["Aorta", "Pulmonary artery", "Pulmonary vein", "Vena cava"],
      a: 1,
    },
    {
      q: "The basic unit of the nervous system is:",
      o: ["Nephron", "Neuron", "Cell", "Brain"],
      a: 1,
    },
    {
      q: "What is the dental formula of an adult human?",
      o: ["2123/2123", "2102/2102", "3143/3143", "2023/2023"],
      a: 0,
    },
    {
      q: "Nitrogen-fixing bacteria live in the roots of:",
      o: ["Maize", "Legumes", "Rice", "Cassava"],
      a: 1,
    },
    {
      q: "The change from tadpole to adult frog is:",
      o: ["Growth", "Metamorphosis", "Evolution", "Moulting"],
      a: 1,
    },
    {
      q: "The function of platelets is:",
      o: ["Transport", "Clotting", "Protection", "Digestion"],
      a: 1,
    },
  ],
  physics: [
    {
      q: "The unit of work is:",
      o: ["Watt", "Joule", "Newton", "Pascal"],
      a: 1,
    },
    {
      q: "Velocity is a ___ quantity.",
      o: ["Scalar", "Vector", "Base", "Constant"],
      a: 1,
    },
    {
      q: "What is the speed of light in vacuum?",
      o: ["3x10^8 m/s", "340 m/s", "1500 m/s", "3x10^6 m/s"],
      a: 0,
    },
    {
      q: "A dentist's mirror is usually:",
      o: ["Plane", "Concave", "Convex", "Cylindrical"],
      a: 1,
    },
    {
      q: "The rate of change of momentum is:",
      o: ["Work", "Power", "Force", "Impulse"],
      a: 2,
    },
    {
      q: "Unit of electric current is:",
      o: ["Volt", "Ampere", "Ohm", "Coulomb"],
      a: 1,
    },
    {
      q: "The thermometer used for measuring high temperatures is:",
      o: ["Clinical", "Pyrometer", "Alcohol", "Mercury"],
      a: 1,
    },
    {
      q: "Refractive index of water is approx:",
      o: ["1.0", "1.33", "1.5", "2.4"],
      a: 1,
    },
    {
      q: "Which of these is a scalar quantity?",
      o: ["Force", "Weight", "Mass", "Acceleration"],
      a: 2,
    },
    {
      q: "Sound travels fastest in:",
      o: ["Air", "Water", "Iron", "Vacuum"],
      a: 2,
    },
    {
      q: "The escape velocity from earth is about:",
      o: ["7.9 km/s", "11.2 km/s", "30 km/s", "5 km/s"],
      a: 1,
    },
    {
      q: "Pressure is defined as:",
      o: ["Force x Area", "Force / Area", "Mass / Volume", "Work / Time"],
      a: 1,
    },
    {
      q: "The instrument for measuring relative humidity is:",
      o: ["Barometer", "Hygrometer", "Hydrometer", "Thermometer"],
      a: 1,
    },
    {
      q: "An object is weightless in:",
      o: ["Water", "Deep space", "Air", "A car"],
      a: 1,
    },
    {
      q: "The fundamental unit of time is:",
      o: ["Minute", "Hour", "Second", "Day"],
      a: 2,
    },
    {
      q: "Resistance is measured in:",
      o: ["Volts", "Ohms", "Watts", "Amps"],
      a: 1,
    },
    {
      q: "Convex mirrors are used as driving mirrors because they give:",
      o: [
        "Magnified image",
        "Virtual image",
        "Wide field of view",
        "Inverted image",
      ],
      a: 2,
    },
    {
      q: "The energy of a moving body is:",
      o: ["Potential", "Kinetic", "Chemical", "Solar"],
      a: 1,
    },
    {
      q: "Which color has the longest wavelength?",
      o: ["Blue", "Green", "Violet", "Red"],
      a: 3,
    },
    {
      q: "The property of a body to resist change in motion is:",
      o: ["Inertia", "Friction", "Gravity", "Weight"],
      a: 0,
    },
    {
      q: "A simple machine with 100% efficiency is:",
      o: ["Ideal", "Real", "Pulley", "Lever"],
      a: 0,
    },
    {
      q: "Frequency is measured in:",
      o: ["Hertz", "Metres", "Seconds", "Joules"],
      a: 0,
    },
    {
      q: "The center of gravity of a uniform sphere is at its:",
      o: ["Surface", "Geometric center", "Top", "Bottom"],
      a: 1,
    },
    {
      q: "Heat transfer through a vacuum is by:",
      o: ["Conduction", "Convection", "Radiation", "Evaporation"],
      a: 2,
    },
    {
      q: "An electric bell works on the principle of:",
      o: ["Heating", "Chemical effect", "Magnetic effect", "Lighting"],
      a: 2,
    },
    {
      q: "The boiling point of water on the Kelvin scale is:",
      o: ["100K", "273K", "373K", "0K"],
      a: 2,
    },
    {
      q: "Capacitance is measured in:",
      o: ["Farads", "Henrys", "Teslas", "Webers"],
      a: 0,
    },
    {
      q: "Which law states that V = IR?",
      o: ["Hooke's", "Ohm's", "Boyle's", "Newton's"],
      a: 1,
    },
    {
      q: "A period of a pendulum depends on its:",
      o: ["Mass", "Amplitude", "Length", "Color"],
      a: 2,
    },
    {
      q: "Echo is a result of sound:",
      o: ["Refraction", "Reflection", "Diffraction", "Interference"],
      a: 1,
    },
    {
      q: "The primary colors of light are:",
      o: [
        "Red, Blue, Yellow",
        "Red, Blue, Green",
        "Yellow, Cyan, Magenta",
        "Red, White, Blue",
      ],
      a: 1,
    },
    {
      q: "Acceleration due to gravity on earth is approx:",
      o: ["5 m/s^2", "9.8 m/s^2", "12 m/s^2", "1.6 m/s^2"],
      a: 1,
    },
    {
      q: "A transistor is a:",
      o: ["Conductor", "Insulator", "Semiconductor", "Resistor"],
      a: 2,
    },
    {
      q: "Power is measured in:",
      o: ["Joules", "Watts", "Newtons", "Volts"],
      a: 1,
    },
    {
      q: "X-rays were discovered by:",
      o: ["Newton", "Roentgen", "Einstein", "Curie"],
      a: 1,
    },
    {
      q: "A hydraulic press works on ___ principle.",
      o: ["Archimedes'", "Pascal's", "Bernoulli's", "Hooke's"],
      a: 1,
    },
    {
      q: "The fuse in a circuit is to:",
      o: [
        "Save power",
        "Prevent excess current",
        "Increase voltage",
        "Dim lights",
      ],
      a: 1,
    },
    {
      q: "Atoms of the same element with different mass numbers are:",
      o: ["Isomers", "Isotopes", "Allotropes", "Isobars"],
      a: 1,
    },
    {
      q: "Beta particles are:",
      o: ["Electrons", "Protons", "Neutrons", "Helium nuclei"],
      a: 0,
    },
    {
      q: "The density of water is highest at:",
      o: ["0°C", "4°C", "100°C", "-4°C"],
      a: 1,
    },
  ],
  chemistry: [
    {
      q: "The most abundant element in the universe is:",
      o: ["Oxygen", "Nitrogen", "Hydrogen", "Helium"],
      a: 2,
    },
    {
      q: "The atomic number is the number of:",
      o: ["Neutrons", "Protons", "Electrons", "Nucleons"],
      a: 1,
    },
    {
      q: "Which gas turns limewater milky?",
      o: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
      a: 2,
    },
    {
      q: "The process of rusting requires:",
      o: ["Water only", "Oxygen only", "Water and Oxygen", "Nitrogen"],
      a: 2,
    },
    { q: "What is the pH of pure water?", o: ["1", "7", "14", "0"], a: 1 },
    {
      q: "An acid and a base react to form:",
      o: ["Gas and water", "Salt and water", "Sugar and salt", "Soap"],
      a: 1,
    },
    {
      q: "The simplest organic compound is:",
      o: ["Methane", "Ethane", "Benzene", "Glucose"],
      a: 0,
    },
    {
      q: "Which allotrope of carbon conducts electricity?",
      o: ["Diamond", "Graphite", "Coal", "Coke"],
      a: 1,
    },
    {
      q: "The bond in NaCl is:",
      o: ["Covalent", "Ionic", "Metallic", "Dative"],
      a: 1,
    },
    {
      q: "Avogadro's constant is:",
      o: ["6.02x10^23", "3x10^8", "1.6x10^-19", "9.8"],
      a: 0,
    },
    {
      q: "A permanent change is a ___ change.",
      o: ["Physical", "Chemical", "Biological", "Natural"],
      a: 1,
    },
    {
      q: "The catalyst in Contact Process is:",
      o: ["Iron", "Vanadium(V) oxide", "Platinum", "Nickel"],
      a: 1,
    },
    {
      q: "Separation of crude oil is by:",
      o: [
        "Filtration",
        "Fractional distillation",
        "Evaporation",
        "Sublimation",
      ],
      a: 1,
    },
    {
      q: "The most electronegative element is:",
      o: ["Oxygen", "Chlorine", "Fluorine", "Nitrogen"],
      a: 2,
    },
    {
      q: "Hard water contains ions of:",
      o: ["Na and K", "Ca and Mg", "Fe and Cu", "Cl and Br"],
      a: 1,
    },
    {
      q: "Which gas is used in fire extinguishers?",
      o: ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"],
      a: 2,
    },
    {
      q: "The formula for Ammonia is:",
      o: ["NH4", "NH3", "HNO3", "N2H4"],
      a: 1,
    },
    {
      q: "Bronze is an alloy of:",
      o: ["Cu and Zn", "Cu and Sn", "Fe and C", "Pb and Sn"],
      a: 1,
    },
    {
      q: "The loss of electrons is:",
      o: ["Reduction", "Oxidation", "Neutralization", "Hydrolysis"],
      a: 1,
    },
    {
      q: "Temporary hardness is removed by:",
      o: ["Filtration", "Boiling", "Chlorination", "Decantation"],
      a: 1,
    },
    {
      q: "Which metal is liquid at room temperature?",
      o: ["Gold", "Silver", "Mercury", "Copper"],
      a: 2,
    },
    {
      q: "A solution with pH 2 is:",
      o: ["Weak acid", "Strong acid", "Neutral", "Strong base"],
      a: 1,
    },
    {
      q: "The functional group -OH belongs to:",
      o: ["Acids", "Alkanes", "Alkanols", "Alkenes"],
      a: 2,
    },
    {
      q: "The noble gas used in balloons is:",
      o: ["Argon", "Neon", "Helium", "Krypton"],
      a: 2,
    },
    {
      q: "Ethyne belongs to the ___ family.",
      o: ["Alkane", "Alkene", "Alkyne", "Aromatic"],
      a: 2,
    },
    {
      q: "Starch turns iodine solution:",
      o: ["Red", "Blue-black", "Yellow", "Green"],
      a: 1,
    },
    {
      q: "The molecular formula of glucose is:",
      o: ["C12H22O11", "C6H12O6", "CH4", "C2H5OH"],
      a: 1,
    },
    {
      q: "Which gas is produced at the anode in electrolysis of brine?",
      o: ["Hydrogen", "Oxygen", "Chlorine", "Sodium"],
      a: 2,
    },
    {
      q: "The main constituent of natural gas is:",
      o: ["Propane", "Butane", "Methane", "Ethane"],
      a: 2,
    },
    {
      q: "A subatomic particle with no charge is:",
      o: ["Proton", "Electron", "Neutron", "Positron"],
      a: 2,
    },
    { q: "Common salt is:", o: ["KCl", "NaCl", "MgCl2", "CaCl2"], a: 1 },
    {
      q: "The shape of methane is:",
      o: ["Linear", "Planar", "Tetrahedral", "Pyramidal"],
      a: 2,
    },
    {
      q: "Which is a drying agent?",
      o: ["Water", "Conc. H2SO4", "Alcohol", "Ether"],
      a: 1,
    },
    {
      q: "The isotope of Carbon used in dating is:",
      o: ["C-12", "C-13", "C-14", "C-16"],
      a: 2,
    },
    {
      q: "The reverse of sublimation is:",
      o: ["Melting", "Deposition", "Freezing", "Boiling"],
      a: 1,
    },
    {
      q: "A saturated solution is one that:",
      o: [
        "Contains no solute",
        "Can dissolve more",
        "Cannot dissolve more at that temp",
        "Is dilute",
      ],
      a: 2,
    },
    {
      q: "Acid found in vinegar is:",
      o: ["Citric", "Ethanoic", "Lactic", "Tartaric"],
      a: 1,
    },
    {
      q: "Which metal is extracted from Bauxite?",
      o: ["Iron", "Copper", "Aluminium", "Tin"],
      a: 2,
    },
    {
      q: "The movement of particles from high to low concentration is:",
      o: ["Osmosis", "Diffusion", "Effusion", "Evaporation"],
      a: 1,
    },
    {
      q: "Chlorine belongs to which group?",
      o: ["Group 1", "Group 7", "Group 8", "Group 2"],
      a: 1,
    },
  ],
};

// State Management
let currentSubject = "english";
let currentIdx = 0;
let timeLeft = 120 * 60;
let countdownTimer; // Made global so it can be cleared easily

let userAnswers = {
  english: Array(60).fill(null),
  biology: Array(40).fill(null),
  physics: Array(40).fill(null),
  chemistry: Array(40).fill(null),
};

// DOM Elements
const timerEl = document.getElementById("timer");
const questionArea = document.querySelector(".question-card__text");
const optionsArea = document.getElementById("options-area");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");
const navButtons = document.querySelectorAll(".subject-nav__btn");

// --- NEW: Shuffle Logic ---
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle all subjects on initialisation
for (const subject in jambQuestions) {
  shuffleArray(jambQuestions[subject]);
}
// --------------------------

function startTimer() {
  countdownTimer = setInterval(() => {
    let hours = Math.floor(timeLeft / 3600);
    let minutes = Math.floor((timeLeft % 3600) / 60);
    let seconds = timeLeft % 60;

    timerEl.textContent = `Time Left: ${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    if (timeLeft <= 0) {
      clearInterval(countdownTimer);
      alert("Time is up! Your exam has been submitted.");
      submitExam();
    }
    timeLeft--;
  }, 1000);
}

function renderQuestion() {
  const question = jambQuestions[currentSubject][currentIdx];
  questionArea.textContent = `${currentIdx + 1}. ${question.q}`;
  optionsArea.innerHTML = "";

  question.o.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    if (userAnswers[currentSubject][currentIdx] === i) {
      btn.classList.add("option-btn--selected");
    }
    btn.textContent = opt;
    btn.onclick = () => selectOption(i);
    optionsArea.appendChild(btn);
  });

  // Update Button States
  prevBtn.disabled = currentIdx === 0;
  nextBtn.disabled = currentIdx === jambQuestions[currentSubject].length - 1;
}

function selectOption(index) {
  userAnswers[currentSubject][currentIdx] = index;
  renderQuestion();
}

function switchSubject(subject) {
  currentSubject = subject;
  currentIdx = 0;

  navButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.subject === subject);
  });

  renderQuestion();
}

// --- UPDATED: Submit and Review Logic ---
function submitExam() {
  clearInterval(countdownTimer);

  let totalWeightedScore = 0;
  let subjectBreakdownHTML = `<ul class="subject-breakdown">`;

  // Define weights
  const weights = {
    english: 100 / 60, // ~1.666
    biology: 2.5,
    physics: 2.5,
    chemistry: 2.5,
  };

  for (const subject in jambQuestions) {
    let correctCount = 0;
    let subTotalQuestions = jambQuestions[subject].length;

    jambQuestions[subject].forEach((q, idx) => {
      if (userAnswers[subject][idx] === q.a) {
        correctCount++;
      }
    });

    // Calculate weighted score for this subject
    let subjectWeightedScore = correctCount * weights[subject];

    // Round to 1 decimal place for the breakdown, but keep full precision for total
    let displayScore = subjectWeightedScore.toFixed(1);

    totalWeightedScore += subjectWeightedScore;

    subjectBreakdownHTML += `
      <li>
        <strong>${subject.toUpperCase()}:</strong> 
        <span class="sub-score">${displayScore} / 100</span> 
        <small>(${correctCount} correct)</small>
      </li>`;
  }

  subjectBreakdownHTML += `</ul>`;

  // Final Total (Rounded to nearest whole number like JAMB does)
  const finalScore = Math.round(totalWeightedScore);

  // Save to "No-Backend" Leaderboard
  saveToLocalLeaderboard(finalScore);

  // WhatsApp Viral Text
  const subjectSummary = extractSummary(); // Call the function here

  const shareText = encodeURIComponent(
    `🎓 *JAMB 2026 MOCK RESULT* 🎓\n\n` +
      `I just scored *${finalScore}/400*! 🎯\n\n` +
      `*Breakdown:*\n${subjectSummary}\n\n` +
      `Think you can beat my score? Try the 2026 CBT Practice tool here: \n` +
      `${window.location.href}`,
  );
  const whatsappUrl = `https://wa.me/?text=${shareText}`;

  document.querySelector(".exam-container").innerHTML = `
    <div class="result-card">
      <h2 class="congrats-text">${getEncouragement(finalScore)}</h2>
      <div class="score-circle">
        <span class="big-score">${finalScore}</span>
        <span class="total-possible">/ 400</span>
      </div>
      
      <div class="breakdown-container">
        <h3>Subject Performance</h3>
        ${subjectBreakdownHTML}
      </div>

      <div class="leaderboard-section">
        <h3>Your Personal Hall of Fame</h3>
        <div id="local-leaderboard"></div>
      </div>

      <div class="result-actions">
        <a href="${whatsappUrl}" target="_blank" class="btn btn--whatsapp">Share Result</a>
        <button class="btn btn--secondary" onclick="window.location.reload()">Retake Exam</button>
        <button class="btn btn--primary" onclick="showReview()">Review Answers</button>
      </div>
    </div>
  `;

  displayLocalLeaderboard();
  (adsbygoogle = window.adsbygoogle || []).push({});
}

function extractSummary() {
  const weights = {
    english: 100 / 60,
    biology: 2.5,
    physics: 2.5,
    chemistry: 2.5,
  };

  let summaryParts = [];

  for (const subject in jambQuestions) {
    let correctCount = 0;

    // Count correct answers for this specific subject
    jambQuestions[subject].forEach((q, idx) => {
      if (userAnswers[subject][idx] === q.a) {
        correctCount++;
      }
    });

    // Calculate the weighted score
    let subjectScore = (correctCount * weights[subject]).toFixed(1);

    // Create a clean string for this subject
    // Example: "ENGLISH: 72.5/100"
    summaryParts.push(`✅ ${subject.toUpperCase()}: ${subjectScore}/100`);
  }

  // Join them with a newline character so they stack vertically in WhatsApp
  return summaryParts.join("\n");
}

// Helper for dynamic encouragement
function getEncouragement(score) {
  if (score >= 300) return "Excellent! University Bound! 🎓";
  if (score >= 250) return "Great Job! Keep pushing! 🚀";
  if (score >= 200) return "Good effort, you're getting there! 👍";
  return "Keep practicing, don't give up! 💪";
}

function showReview() {
  let reviewHTML = `<div class="review-wrapper"><h2>Exam Review</h2>`;

  for (const subject in jambQuestions) {
    reviewHTML += `<h3 class="review-subject-title">${subject.toUpperCase()}</h3>`;

    jambQuestions[subject].forEach((q, idx) => {
      let userAns = userAnswers[subject][idx];
      let isCorrect = userAns === q.a;
      let statusClass = isCorrect ? "text-correct" : "text-wrong";

      let userAnsText = userAns !== null ? q.o[userAns] : "Not Attempted";
      let correctAnsText = q.o[q.a];

      reviewHTML += `
        <div class="review-item">
          <p class="review-q"><strong>Q${idx + 1}:</strong> ${q.q}</p>
          <div class="review-answers">
            <p>Correct Answer: <span class="text-correct">${correctAnsText}</span></p>
            <p>Your Answer: <span class="${statusClass}">${userAnsText}</span></p>
          </div>
        </div>
      `;
    });
  }

  reviewHTML += `
    <div class="review-footer">
      <button class="btn btn--primary" onclick="window.location.reload()">Retake Exam</button>
    </div>
  </div>`;

  document.querySelector(".exam-container").innerHTML = reviewHTML;
}
// ----------------------------------------

// Event Listeners
navButtons.forEach((btn) => {
  btn.onclick = () => switchSubject(btn.dataset.subject);
});

nextBtn.onclick = () => {
  if (currentIdx < jambQuestions[currentSubject].length - 1) {
    currentIdx++;
    renderQuestion();
  }
};

prevBtn.onclick = () => {
  if (currentIdx > 0) {
    currentIdx--;
    renderQuestion();
  }
};

submitBtn.onclick = () => {
  if (confirm("Are you sure you want to submit your exam?")) {
    submitExam();
  }
};

const startScreen = document.getElementById("start-screen");
const mainContainer = document.getElementById("main-exam-container");
const beginBtn = document.getElementById("begin-btn");

beginBtn.onclick = () => {
  // 1. Hide Start Screen
  startScreen.style.display = "none";

  // 2. Show Exam
  mainContainer.style.display = "block";

  // 3. Start Logic
  startTimer();
  renderQuestion();
};

function saveToLocalLeaderboard(score) {
  // Get existing scores from LocalStorage or start with an empty array
  let scores = JSON.parse(localStorage.getItem("jamb_history")) || [];

  // Add new score with date
  const newEntry = {
    score: score,
    date: new Date().toLocaleDateString(),
  };

  scores.push(newEntry);

  // Sort by highest score first and keep only top 5
  scores.sort((a, b) => b.score - a.score);
  scores = scores.slice(0, 5);

  // Save back to LocalStorage
  localStorage.setItem("jamb_history", JSON.stringify(scores));
}

function displayLocalLeaderboard() {
  const scores = JSON.parse(localStorage.getItem("jamb_history")) || [];
  const container = document.getElementById("local-leaderboard");

  if (scores.length === 0) {
    container.innerHTML = "<p>No records yet!</p>";
    return;
  }

  let listHTML = `<ol class="leaderboard-list">`;
  scores.forEach((entry) => {
    listHTML += `<li><strong>${entry.score}</strong> <small>(${entry.date})</small></li>`;
  });
  listHTML += `</ol>`;

  container.innerHTML = listHTML;
}
