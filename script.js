// Motivational Quotes
const motivationalQuotes = [
    "Science is not only a disciple of reason but also one of romance and passion. - Stephen Hawking",
    "The good thing about science is that it's true whether or not you believe in it. - Neil deGrasse Tyson",
    "Biology is the study of complicated things that have the appearance of having been designed. - Richard Dawkins",
    "In biology, nothing is clear, everything is too complicated. - Enrico Fermi",
    "Life is a characteristic that distinguishes objects that have signaling processes from those that do not.",
    "The diversity of life is one of the most striking aspects of our planet. - Edward O. Wilson",
    "Study nature, love nature, stay close to nature. It will never fail you. - Frank Lloyd Wright",
    "The important thing is not to stop questioning. - Albert Einstein",
    "Every great advance in science has issued from a new audacity of imagination. - John Dewey",
    "Science knows no country, because knowledge belongs to humanity. - Louis Pasteur"
];

// Result Quotes
const resultQuotes = {
    excellent: [
        "Outstanding! You're a biology expert! 🌟",
        "Phenomenal work! Keep exploring life sciences! ✨",
        "Incredible! You've mastered this chapter! 🎯"
    ],
    good: [
        "Great job! You understand biology well! 👍",
        "Well done! Keep studying! 💪",
        "Impressive! You're making great progress! 🚀"
    ],
    average: [
        "Good effort! Practice more! 📚",
        "Keep learning! Biology is fascinating! 🎓",
        "Nice try! Review and improve! 💡"
    ],
    poor: [
        "Don't give up! Every biologist started somewhere! 🌱",
        "Keep trying! Success is coming! 🌈",
        "Practice more! You'll master biology! 💪"
    ]
};

// Chapter Names
const chapterNames = {
    1: "Living World",
    2: "Systematics of Living Organisms",
    3: "Kingdom Plantae",
    4: "Kingdom Animalia",
    5: "Cell Structure and Organization",
    6: "Biomolecules",
    7: "Cell Division",
    8: "Plant Tissues and Anatomy",
    9: "Morphology of Flowering Plants",
    10: "Animal Tissues",
    11: "Study of Animal Type (Cockroach)",
    12: "Photosynthesis",
    13: "Respiration and Energy Transfer",
    14: "Human Nutrition",
    15: "Excretion and Osmoregulation",
    16: "Skeleton and Movement"
};

// Complete Question Bank with 15 questions per chapter
const questionBank = {
    1: [ // Living World
        {id: 1, question: "Who is known as the 'Father of Taxonomy'?", options: ["Linnaeus", "Darwin", "Wallace", "Mendel"], correctAnswer: 0},
        {id: 2, question: "Which is NOT a characteristic of living beings?", options: ["Growth", "Irritability", "Movement", "Gravity"], correctAnswer: 3},
        {id: 3, question: "ICBN stands for:", options: ["International Code of Botanical Nomenclature", "Indian Board of Nomenclature", "Indian Council Botany", "International Congress Botany"], correctAnswer: 0},
        {id: 4, question: "The highest taxonomic category is:", options: ["Family", "Order", "Kingdom", "Phylum"], correctAnswer: 2},
        {id: 5, question: "Binomial nomenclature uses how many names?", options: ["One", "Two", "Three", "Four"], correctAnswer: 1},
        {id: 6, question: "Who gave the binomial nomenclature?", options: ["Mendel", "Linnaeus", "Darwin", "Hooker"], correctAnswer: 1},
        {id: 7, question: "Scientific names should be written in:", options: ["English", "Hindi", "Latin", "Greek"], correctAnswer: 2},
        {id: 8, question: "Which is NOT a property of living organisms?", options: ["Metabolism", "Reproduction", "Growth", "Magnetism"], correctAnswer: 3},
        {id: 9, question: "The basic unit of classification is:", options: ["Phylum", "Species", "Class", "Family"], correctAnswer: 1},
        {id: 10, question: "Metabolism includes:", options: ["Anabolism only", "Catabolism only", "Both anabolism and catabolism", "Neither"], correctAnswer: 2},
        {id: 11, question: "Living organisms show:", options: ["Growth", "Response to stimuli", "Reproduction", "All of these"], correctAnswer: 3},
        {id: 12, question: "Taxonomy is the science of:", options: ["Classification", "Naming", "Identification", "All of these"], correctAnswer: 3},
        {id: 13, question: "Herbarium is a collection of:", options: ["Living plants", "Dried plant specimens", "Animal specimens", "Fossils"], correctAnswer: 1},
        {id: 14, question: "Museum specimens are preserved in:", options: ["Water", "Alcohol", "Formalin", "All of these"], correctAnswer: 3},
        {id: 15, question: "Botanical gardens are used for:", options: ["Research", "Conservation", "Education", "All of these"], correctAnswer: 3}
    ],
    
    2: [ // Systematics of Living Organisms
        {id: 1, question: "Systematics includes:", options: ["Identification", "Classification", "Nomenclature", "All of these"], correctAnswer: 3},
        {id: 2, question: "Who coined the term 'Systematics'?", options: ["Darwin", "Linnaeus", "Theophrastus", "Aristotle"], correctAnswer: 1},
        {id: 3, question: "The five kingdom system was proposed by:", options: ["Darwin", "Whittaker", "Linnaeus", "Margulis"], correctAnswer: 1},
        {id: 4, question: "Which is NOT a kingdom in Whittaker's system?", options: ["Monera", "Animalia", "Fungi", "Cyanobacteria"], correctAnswer: 3},
        {id: 5, question: "Type specimen refers to:", options: ["Fossil", "Reference specimen", "Random specimen", "Any plant"], correctAnswer: 1},
        {id: 6, question: "Taxonomic hierarchy was introduced by:", options: ["Linnaeus", "Mayr", "Darwin", "Mendel"], correctAnswer: 0},
        {id: 7, question: "Natural system of classification is based on:", options: ["Single character", "Multiple characters", "Artificial characters", "Economic importance"], correctAnswer: 1},
        {id: 8, question: "Phylogenetic classification is based on:", options: ["Morphology", "Evolutionary relationships", "Economic importance", "Habitat"], correctAnswer: 1},
        {id: 9, question: "Numerical taxonomy uses:", options: ["Mathematical methods", "Morphology only", "Single character", "Economic value"], correctAnswer: 0},
        {id: 10, question: "Cladistics is based on:", options: ["Overall similarity", "Evolutionary relationships", "Morphology", "Habitat"], correctAnswer: 1},
        {id: 11, question: "Chemotaxonomy uses:", options: ["Chemical constituents", "Morphology", "Habitat", "Economic value"], correctAnswer: 0},
        {id: 12, question: "Cytotaxonomy is based on:", options: ["Cell structure", "Morphology", "Habitat", "Economic value"], correctAnswer: 0},
        {id: 13, question: "Molecular taxonomy uses:", options: ["DNA/RNA", "Morphology", "Habitat", "Economic value"], correctAnswer: 0},
        {id: 14, question: "Barcode of life project uses:", options: ["Morphology", "DNA sequences", "Proteins", "Habitat"], correctAnswer: 1},
        {id: 15, question: "Alpha taxonomy deals with:", options: ["Description and naming", "Evolutionary relationships", "Molecular analysis", "Economic importance"], correctAnswer: 0}
    ],
    
    3: [ // Kingdom Plantae
        {id: 1, question: "Kingdom Plantae includes:", options: ["All green plants", "Eukaryotic, autotrophic organisms", "Photosynthetic organisms", "All of these"], correctAnswer: 3},
        {id: 2, question: "Bryophytes are called:", options: ["Amphibians of plant kingdom", "Primitive plants", "Seedless plants", "All of these"], correctAnswer: 0},
        {id: 3, question: "Seeds are absent in:", options: ["Gymnosperms", "Angiosperms", "Pteridophytes", "Cycads"], correctAnswer: 2},
        {id: 4, question: "Double fertilization occurs in:", options: ["Algae", "Bryophytes", "Angiosperms", "Gymnosperms"], correctAnswer: 2},
        {id: 5, question: "Vascular tissues are absent in:", options: ["Angiosperms", "Bryophytes", "Pteridophytes", "Gymnosperms"], correctAnswer: 1},
        {id: 6, question: "Alternation of generations is found in:", options: ["Bryophytes", "Pteridophytes", "Both", "Neither"], correctAnswer: 2},
        {id: 7, question: "Sporophyte is dominant in:", options: ["Bryophytes", "Pteridophytes", "Both", "Neither"], correctAnswer: 1},
        {id: 8, question: "Gametophyte is dominant in:", options: ["Bryophytes", "Pteridophytes", "Both", "Neither"], correctAnswer: 0},
        {id: 9, question: "Heterospory is found in:", options: ["Selaginella", "Salvinia", "Both", "Neither"], correctAnswer: 2},
        {id: 10, question: "Gymnosperms have:", options: ["Naked seeds", "Covered seeds", "No seeds", "Fruits"], correctAnswer: 0},
        {id: 11, question: "Angiosperms are characterized by:", options: ["Flowers", "Fruits", "Covered seeds", "All of these"], correctAnswer: 3},
        {id: 12, question: "Monocots have:", options: ["One cotyledon", "Two cotyledons", "Three cotyledons", "No cotyledon"], correctAnswer: 0},
        {id: 13, question: "Dicots have:", options: ["One cotyledon", "Two cotyledons", "Three cotyledons", "No cotyledon"], correctAnswer: 1},
        {id: 14, question: "Parallel venation is found in:", options: ["Monocots", "Dicots", "Both", "Neither"], correctAnswer: 0},
        {id: 15, question: "Reticulate venation is found in:", options: ["Monocots", "Dicots", "Both", "Neither"], correctAnswer: 1}
    ],
    
    4: [ // Kingdom Animalia
        {id: 1, question: "Kingdom Animalia includes:", options: ["Eukaryotic, multicellular, heterotrophic", "Prokaryotic, heterotrophic", "Autotrophic, unicellular", "All organisms"], correctAnswer: 0},
        {id: 2, question: "Notochord is present in:", options: ["Chordates", "Non-chordates", "All animals", "Invertebrates"], correctAnswer: 0},
        {id: 3, question: "Animals with jointed appendages belong to:", options: ["Arthropoda", "Mollusca", "Chordata", "Porifera"], correctAnswer: 0},
        {id: 4, question: "Radial symmetry is found in:", options: ["Cnidaria", "Echinodermata", "Both", "Neither"], correctAnswer: 2},
        {id: 5, question: "Bilateral symmetry is found in:", options: ["Most animals", "Cnidaria", "Porifera", "Protozoa"], correctAnswer: 0},
        {id: 6, question: "Acoelomate animals are:", options: ["Platyhelminthes", "Nematoda", "Annelida", "Arthropoda"], correctAnswer: 0},
        {id: 7, question: "Pseudocoelomate animals are:", options: ["Platyhelminthes", "Nematoda", "Annelida", "Arthropoda"], correctAnswer: 1},
        {id: 8, question: "Coelomate animals include:", options: ["Annelida", "Mollusca", "Chordata", "All of these"], correctAnswer: 3},
        {id: 9, question: "Segmentation is found in:", options: ["Annelida", "Arthropoda", "Both", "Neither"], correctAnswer: 2},
        {id: 10, question: "Open circulatory system is found in:", options: ["Arthropoda", "Mollusca", "Both", "Chordata"], correctAnswer: 2},
        {id: 11, question: "Closed circulatory system is found in:", options: ["Annelida", "Chordata", "Both", "Neither"], correctAnswer: 2},
        {id: 12, question: "Water vascular system is found in:", options: ["Porifera", "Cnidaria", "Echinodermata", "Chordata"], correctAnswer: 2},
        {id: 13, question: "Vertebrates belong to:", options: ["Chordata", "Arthropoda", "Mollusca", "Echinodermata"], correctAnswer: 0},
        {id: 14, question: "Invertebrates include:", options: ["All non-chordates", "Some chordates", "Both", "Neither"], correctAnswer: 2},
        {id: 15, question: "Largest phylum is:", options: ["Chordata", "Arthropoda", "Mollusca", "Porifera"], correctAnswer: 1}
    ],
    
    5: [ // Cell Structure and Organization
        {id: 1, question: "Cell theory was proposed by:", options: ["Schleiden & Schwann", "Hooke", "Virchow", "Pasteur"], correctAnswer: 0},
        {id: 2, question: "Prokaryotic cells lack:", options: ["Nucleus", "DNA", "Cell wall", "Plasma membrane"], correctAnswer: 0},
        {id: 3, question: "The function of mitochondria is:", options: ["Protein synthesis", "Energy production", "Lipid breakdown", "DNA storage"], correctAnswer: 1},
        {id: 4, question: "Plant cell wall is made of:", options: ["Chitin", "Cellulose", "Pectin", "Starch"], correctAnswer: 1},
        {id: 5, question: "The Golgi apparatus is also called:", options: ["Dictyosome", "Lysosome", "Peroxisome", "Centrosome"], correctAnswer: 0},
        {id: 6, question: "Organelle for photosynthesis:", options: ["Chloroplast", "Vacuole", "Mitochondria", "Nucleus"], correctAnswer: 0},
        {id: 7, question: "The fluid mosaic model describes:", options: ["Cell wall", "Plasma membrane", "Nucleus", "Cytoplasm"], correctAnswer: 1},
        {id: 8, question: "Ribosomes are made of:", options: ["Protein only", "RNA only", "Protein and RNA", "DNA only"], correctAnswer: 2},
        {id: 9, question: "Lysosomes are called:", options: ["Powerhouses", "Suicide bags", "Protein factories", "Storage organelles"], correctAnswer: 1},
        {id: 10, question: "Peroxisomes contain:", options: ["Catalase", "Lipase", "Amylase", "Pepsin"], correctAnswer: 0},
        {id: 11, question: "Centrioles are found in:", options: ["Plant cells", "Animal cells", "Both", "Neither"], correctAnswer: 1},
        {id: 12, question: "Large vacuoles are found in:", options: ["Animal cells", "Plant cells", "Both", "Neither"], correctAnswer: 1},
        {id: 13, question: "Chromatin is composed of:", options: ["DNA and proteins", "RNA and proteins", "DNA only", "Proteins only"], correctAnswer: 0},
        {id: 14, question: "Nuclear envelope has:", options: ["Single membrane", "Double membrane", "No membrane", "Triple membrane"], correctAnswer: 1},
        {id: 15, question: "Cytoplasm excludes:", options: ["Organelles", "Nucleus", "Water", "Proteins"], correctAnswer: 1}
    ],
    
    6: [ // Biomolecules
        {id: 1, question: "Enzymes are mostly:", options: ["Carbohydrates", "Proteins", "Lipids", "Vitamins"], correctAnswer: 1},
        {id: 2, question: "Sucrose is a:", options: ["Monosaccharide", "Disaccharide", "Polysaccharide", "Enzyme"], correctAnswer: 1},
        {id: 3, question: "Proteins are made of:", options: ["Amino acids", "Fatty acids", "Sugars", "Purines"], correctAnswer: 0},
        {id: 4, question: "Cholesterol is a:", options: ["Carbohydrate", "Lipid", "Protein", "Mineral"], correctAnswer: 1},
        {id: 5, question: "DNA stands for:", options: ["Deoxyribonucleic acid", "Diribonucleic acid", "Deoxyribose acid", "None"], correctAnswer: 0},
        {id: 6, question: "Vitamins are:", options: ["Inorganic", "Organic", "Synthetic", "Amino acids"], correctAnswer: 1},
        {id: 7, question: "Example of fibrous protein:", options: ["Globulin", "Collagen", "Albumin", "Haemoglobin"], correctAnswer: 1},
        {id: 8, question: "Starch is a:", options: ["Monosaccharide", "Disaccharide", "Polysaccharide", "Lipid"], correctAnswer: 2},
        {id: 9, question: "Cellulose is found in:", options: ["Animal cells", "Plant cell walls", "Blood", "Muscles"], correctAnswer: 1},
        {id: 10, question: "Glycogen is stored in:", options: ["Plants", "Animals", "Both", "Neither"], correctAnswer: 1},
        {id: 11, question: "Saturated fats are:", options: ["Liquid at room temperature", "Solid at room temperature", "Gaseous", "Crystalline"], correctAnswer: 1},
        {id: 12, question: "Unsaturated fats are:", options: ["Solid at room temperature", "Liquid at room temperature", "Gaseous", "Crystalline"], correctAnswer: 1},
        {id: 13, question: "Nucleotides contain:", options: ["Sugar, phosphate, base", "Only sugar and base", "Only phosphate and base", "Only sugar"], correctAnswer: 0},
        {id: 14, question: "RNA contains:", options: ["Deoxyribose", "Ribose", "Glucose", "Fructose"], correctAnswer: 1},
        {id: 15, question: "Primary structure of protein refers to:", options: ["Amino acid sequence", "3D structure", "Folding pattern", "Quaternary structure"], correctAnswer: 0}
    ],
    
    7: [ // Cell Division
        {id: 1, question: "Mitosis occurs in:", options: ["Sex cells", "Somatic cells", "Gametes", "Spores"], correctAnswer: 1},
        {id: 2, question: "Meiosis results in:", options: ["Diploid cells", "Tetraploid cells", "Haploid cells", "Triploid cells"], correctAnswer: 2},
        {id: 3, question: "Interphase includes:", options: ["G1, S, G2", "Mitosis", "Prophase", "Metaphase"], correctAnswer: 0},
        {id: 4, question: "DNA replication occurs in:", options: ["G1 phase", "S phase", "G2 phase", "M phase"], correctAnswer: 1},
        {id: 5, question: "Crossing over occurs in:", options: ["Metaphase I", "Prophase I", "Anaphase I", "Telophase I"], correctAnswer: 1},
        {id: 6, question: "Centromere holds:", options: ["Chromatids", "Chromosomes", "DNA", "Cells"], correctAnswer: 0},
        {id: 7, question: "Spindle fibers are made of:", options: ["Actin", "Myosin", "Tubulin", "Keratin"], correctAnswer: 2},
        {id: 8, question: "Cytokinesis in plant cells involves:", options: ["Cell plate", "Contractile ring", "Centrioles", "Flagella"], correctAnswer: 0},
        {id: 9, question: "Meiosis I is called:", options: ["Equational division", "Reductional division", "Mitotic division", "Binary fission"], correctAnswer: 1},
        {id: 10, question: "Meiosis II is called:", options: ["Reductional division", "Equational division", "Reduction division", "Binary fission"], correctAnswer: 1},
        {id: 11, question: "Chiasmata are formed during:", options: ["Prophase I", "Metaphase I", "Anaphase I", "Telophase I"], correctAnswer: 0},
        {id: 12, question: "Synapsis occurs during:", options: ["Prophase I", "Metaphase I", "Anaphase I", "Prophase II"], correctAnswer: 0},
        {id: 13, question: "Cell cycle checkpoints ensure:", options: ["Proper cell division", "DNA damage repair", "Chromosome alignment", "All of these"], correctAnswer: 3},
        {id: 14, question: "Cancer results from:", options: ["Normal cell division", "Uncontrolled cell division", "No cell division", "Slow cell division"], correctAnswer: 1},
        {id: 15, question: "Apoptosis is:", options: ["Cell multiplication", "Programmed cell death", "Cell growth", "Cell differentiation"], correctAnswer: 1}
    ],
    
    8: [ // Plant Tissues and Anatomy
        {id: 1, question: "Xylem transports:", options: ["Water and minerals", "Food", "Hormones", "Oxygen"], correctAnswer: 0},
        {id: 2, question: "Phloem transports:", options: ["Water", "Food", "Minerals only", "Oxygen"], correctAnswer: 1},
        {id: 3, question: "Meristematic tissues are:", options: ["Dead", "Living and dividing", "Non-dividing", "Protective"], correctAnswer: 1},
        {id: 4, question: "Parenchyma cells are:", options: ["Dead", "Living", "Thick-walled", "Lignified"], correctAnswer: 1},
        {id: 5, question: "Collenchyma provides:", options: ["Support", "Photosynthesis", "Conduction", "Protection"], correctAnswer: 0},
        {id: 6, question: "Sclerenchyma is:", options: ["Living", "Dead", "Thin-walled", "Photosynthetic"], correctAnswer: 1},
        {id: 7, question: "Guard cells surround:", options: ["Stomata", "Chloroplasts", "Vascular bundles", "Roots"], correctAnswer: 0},
        {id: 8, question: "Epidermis is:", options: ["Innermost layer", "Outermost layer", "Middle layer", "Vascular tissue"], correctAnswer: 1},
        {id: 9, question: "Cambium is a:", options: ["Primary meristem", "Secondary meristem", "Permanent tissue", "Dead tissue"], correctAnswer: 1},
        {id: 10, question: "Annual rings are formed by:", options: ["Primary growth", "Secondary growth", "Leaf fall", "Root growth"], correctAnswer: 1},
        {id: 11, question: "Heartwood is:", options: ["Living", "Dead", "Photosynthetic", "Meristematic"], correctAnswer: 1},
        {id: 12, question: "Sapwood is:", options: ["Dead", "Living and functional", "Non-functional", "Protective"], correctAnswer: 1},
        {id: 13, question: "Cork is produced by:", options: ["Cambium", "Cork cambium", "Apical meristem", "Intercalary meristem"], correctAnswer: 1},
        {id: 14, question: "Lenticels help in:", options: ["Photosynthesis", "Gas exchange", "Water transport", "Food storage"], correctAnswer: 1},
        {id: 15, question: "Trichomes are:", options: ["Root hairs", "Epidermal outgrowths", "Vascular tissues", "Meristems"], correctAnswer: 1}
    ],
    
    9: [ // Morphology of Flowering Plants
        {id: 1, question: "Root system functions include:", options: ["Anchorage", "Absorption", "Storage", "All of these"], correctAnswer: 3},
        {id: 2, question: "Tap root system is found in:", options: ["Monocots", "Dicots", "Both", "Neither"], correctAnswer: 1},
        {id: 3, question: "Fibrous root system is found in:", options: ["Monocots", "Dicots", "Both", "Neither"], correctAnswer: 0},
        {id: 4, question: "Adventitious roots arise from:", options: ["Radicle", "Stem or leaves", "Primary root", "Seed"], correctAnswer: 1},
        {id: 5, question: "Nodes are:", options: ["Points where leaves arise", "Internodal regions", "Root tips", "Flower parts"], correctAnswer: 0},
        {id: 6, question: "Internodes are:", options: ["Points where leaves arise", "Regions between nodes", "Root tips", "Flower parts"], correctAnswer: 1},
        {id: 7, question: "Phyllotaxy refers to:", options: ["Leaf arrangement", "Root type", "Flower type", "Fruit type"], correctAnswer: 0},
        {id: 8, question: "Simple leaves have:", options: ["Divided lamina", "Undivided lamina", "No lamina", "Multiple leaflets"], correctAnswer: 1},
        {id: 9, question: "Compound leaves have:", options: ["Undivided lamina", "Divided lamina", "No petiole", "Single leaflet"], correctAnswer: 1},
        {id: 10, question: "Venation in monocots is:", options: ["Parallel", "Reticulate", "Both", "Neither"], correctAnswer: 0},
        {id: 11, question: "Venation in dicots is:", options: ["Parallel", "Reticulate", "Both", "Neither"], correctAnswer: 1},
        {id: 12, question: "Calyx consists of:", options: ["Petals", "Sepals", "Stamens", "Carpels"], correctAnswer: 1},
        {id: 13, question: "Corolla consists of:", options: ["Sepals", "Petals", "Stamens", "Carpels"], correctAnswer: 1},
        {id: 14, question: "Androecium consists of:", options: ["Sepals", "Petals", "Stamens", "Carpels"], correctAnswer: 2},
        {id: 15, question: "Gynoecium consists of:", options: ["Sepals", "Petals", "Stamens", "Carpels"], correctAnswer: 3}
    ],
    
    10: [ // Animal Tissues
        {id: 1, question: "Epithelial tissue functions in:", options: ["Protection", "Secretion", "Absorption", "All of these"], correctAnswer: 3},
        {id: 2, question: "Connective tissue includes:", options: ["Blood", "Bone", "Cartilage", "All of these"], correctAnswer: 3},
        {id: 3, question: "Muscle tissue is specialized for:", options: ["Protection", "Movement", "Secretion", "Support"], correctAnswer: 1},
        {id: 4, question: "Nervous tissue consists of:", options: ["Neurons", "Neuroglia", "Both", "Neither"], correctAnswer: 2},
        {id: 5, question: "Squamous epithelium is:", options: ["Cube-shaped", "Flat", "Column-shaped", "Irregular"], correctAnswer: 1},
        {id: 6, question: "Cuboidal epithelium is:", options: ["Flat", "Cube-shaped", "Column-shaped", "Irregular"], correctAnswer: 1},
        {id: 7, question: "Columnar epithelium is:", options: ["Flat", "Cube-shaped", "Column-shaped", "Irregular"], correctAnswer: 2},
        {id: 8, question: "Smooth muscle is:", options: ["Voluntary", "Involuntary", "Striated", "Multinucleated"], correctAnswer: 1},
        {id: 9, question: "Skeletal muscle is:", options: ["Involuntary", "Voluntary", "Non-striated", "Uninucleated"], correctAnswer: 1},
        {id: 10, question: "Cardiac muscle is:", options: ["Voluntary", "Involuntary", "Non-striated", "Multinucleated"], correctAnswer: 1},
        {id: 11, question: "Tendons connect:", options: ["Bone to bone", "Muscle to bone", "Muscle to muscle", "Bone to cartilage"], correctAnswer: 1},
        {id: 12, question: "Ligaments connect:", options: ["Muscle to bone", "Bone to bone", "Muscle to muscle", "Tendon to bone"], correctAnswer: 1},
        {id: 13, question: "Adipose tissue stores:", options: ["Proteins", "Carbohydrates", "Fats", "Minerals"], correctAnswer: 2},
        {id: 14, question: "Areolar tissue provides:", options: ["Support", "Cushioning", "Both", "Neither"], correctAnswer: 2},
        {id: 15, question: "Matrix is abundant in:", options: ["Epithelial tissue", "Connective tissue", "Muscle tissue", "Nervous tissue"], correctAnswer: 1}
    ],
    
    11: [ // Study of Animal Type (Cockroach)
        {id: 1, question: "Cockroach belongs to phylum:", options: ["Mollusca", "Arthropoda", "Annelida", "Chordata"], correctAnswer: 1},
        {id: 2, question: "Number of legs in cockroach:", options: ["4", "6", "8", "10"], correctAnswer: 1},
        {id: 3, question: "Respiratory organs in cockroach:", options: ["Lungs", "Gills", "Tracheae", "Skin"], correctAnswer: 2},
        {id: 4, question: "Excretory organs in cockroach:", options: ["Kidneys", "Malpighian tubules", "Nephridia", "Contractile vacuoles"], correctAnswer: 1},
        {id: 5, question: "Cockroach has:", options: ["Open circulatory system", "Closed circulatory system", "No circulatory system", "Lymphatic system only"], correctAnswer: 0},
        {id: 6, question: "Heart of cockroach is:", options: ["Ventral", "Dorsal", "Lateral", "Absent"], correctAnswer: 1},
        {id: 7, question: "Cockroach is:", options: ["Herbivorous", "Carnivorous", "Omnivorous", "Parasitic"], correctAnswer: 2},
        {id: 8, question: "Crop in cockroach is used for:", options: ["Digestion", "Storage", "Absorption", "Excretion"], correctAnswer: 1},
        {id: 9, question: "Gizzard helps in:", options: ["Storage", "Grinding food", "Absorption", "Excretion"], correctAnswer: 1},
        {id: 10, question: "Cockroach shows:", options: ["Complete metamorphosis", "Incomplete metamorphosis", "No metamorphosis", "Direct development"], correctAnswer: 1},
        {id: 11, question: "Wings in cockroach:", options: ["Are absent", "Two pairs", "One pair", "Three pairs"], correctAnswer: 1},
        {id: 12, question: "Antennae in cockroach are:", options: ["Sensory organs", "Respiratory organs", "Excretory organs", "Digestive organs"], correctAnswer: 0},
        {id: 13, question: "Compound eyes help in:", options: ["Hearing", "Vision", "Smell", "Taste"], correctAnswer: 1},
        {id: 14, question: "Spiracles are:", options: ["Reproductive organs", "Respiratory openings", "Excretory openings", "Sensory organs"], correctAnswer: 1},
        {id: 15, question: "Hemolymph in cockroach:", options: ["Carries oxygen", "Does not carry oxygen", "Is red in color", "Flows in vessels"], correctAnswer: 1}
    ],
    
    12: [ // Photosynthesis
        {id: 1, question: "Photosynthesis occurs in:", options: ["Mitochondria", "Chloroplasts", "Nucleus", "Cytoplasm"], correctAnswer: 1},
        {id: 2, question: "Light reaction occurs in:", options: ["Stroma", "Thylakoids", "Cytoplasm", "Nucleus"], correctAnswer: 1},
        {id: 3, question: "Dark reaction occurs in:", options: ["Thylakoids", "Stroma", "Cytoplasm", "Nucleus"], correctAnswer: 1},
        {id: 4, question: "Oxygen is released from:", options: ["CO2", "Water", "Glucose", "ATP"], correctAnswer: 1},
        {id: 5, question: "Calvin cycle is also called:", options: ["Light reaction", "Dark reaction", "Hill reaction", "Photorespiration"], correctAnswer: 1},
        {id: 6, question: "RuBisCO enzyme fixes:", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Water"], correctAnswer: 1},
        {id: 7, question: "C4 plants are adapted to:", options: ["Cold climate", "Hot and dry climate", "Wet climate", "High altitude"], correctAnswer: 1},
        {id: 8, question: "CAM plants open stomata:", options: ["During day", "During night", "Always", "Never"], correctAnswer: 1},
        {id: 9, question: "Photorespiration occurs in:", options: ["C3 plants", "C4 plants", "CAM plants", "All plants"], correctAnswer: 0},
        {id: 10, question: "Chlorophyll a absorbs:", options: ["Red and blue light", "Green light", "Yellow light", "Violet light only"], correctAnswer: 0},
        {id: 11, question: "Accessory pigments include:", options: ["Chlorophyll b", "Carotenoids", "Both", "Neither"], correctAnswer: 2},
        {id: 12, question: "ATP is produced during:", options: ["Light reaction", "Dark reaction", "Both", "Neither"], correctAnswer: 0},
        {id: 13, question: "NADPH is produced during:", options: ["Light reaction", "Dark reaction", "Both", "Neither"], correctAnswer: 0},
        {id: 14, question: "Glucose is produced during:", options: ["Light reaction", "Dark reaction", "Both", "Neither"], correctAnswer: 1},
        {id: 15, question: "Photolysis refers to:", options: ["Splitting of glucose", "Splitting of water", "Splitting of CO2", "Splitting of ATP"], correctAnswer: 1}
    ],
    
    13: [ // Respiration and Energy Transfer
        {id: 1, question: "Cellular respiration occurs in:", options: ["Chloroplasts", "Mitochondria", "Nucleus", "Cytoplasm"], correctAnswer: 1},
        {id: 2, question: "Glycolysis occurs in:", options: ["Mitochondria", "Cytoplasm", "Nucleus", "Chloroplasts"], correctAnswer: 1},
        {id: 3, question: "Krebs cycle occurs in:", options: ["Cytoplasm", "Mitochondrial matrix", "Nucleus", "Chloroplasts"], correctAnswer: 1},
        {id: 4, question: "Electron transport chain is located in:", options: ["Outer mitochondrial membrane", "Inner mitochondrial membrane", "Matrix", "Cytoplasm"], correctAnswer: 1},
        {id: 5, question: "Total ATP produced in aerobic respiration:", options: ["2", "30", "38", "50"], correctAnswer: 2},
        {id: 6, question: "Anaerobic respiration produces:", options: ["More ATP than aerobic", "Less ATP than aerobic", "Same ATP as aerobic", "No ATP"], correctAnswer: 1},
        {id: 7, question: "Fermentation produces:", options: ["Alcohol or lactic acid", "Oxygen", "Water", "Glucose"], correctAnswer: 0},
        {id: 8, question: "RQ of carbohydrates is:", options: ["0.7", "0.8", "1.0", "1.2"], correctAnswer: 2},
        {id: 9, question: "RQ of fats is:", options: ["0.7", "0.8", "1.0", "1.2"], correctAnswer: 0},
        {id: 10, question: "RQ of proteins is:", options: ["0.7", "0.8", "1.0", "1.2"], correctAnswer: 1},
        {id: 11, question: "Oxygen debt occurs after:", options: ["Rest", "Light exercise", "Heavy exercise", "Sleep"], correctAnswer: 2},
        {id: 12, question: "Lactic acid fermentation occurs in:", options: ["Yeast", "Bacteria", "Muscle cells", "Both B and C"], correctAnswer: 3},
        {id: 13, question: "Alcoholic fermentation occurs in:", options: ["Muscle cells", "Yeast", "Bacteria", "Plant cells"], correctAnswer: 1},
        {id: 14, question: "End products of aerobic respiration:", options: ["CO2 and H2O", "Alcohol and CO2", "Lactic acid", "Glucose"], correctAnswer: 0},
        {id: 15, question: "Pyruvate is formed during:", options: ["Glycolysis", "Krebs cycle", "Electron transport", "Fermentation"], correctAnswer: 0}
    ],
    
    14: [ // Human Nutrition
        {id: 1, question: "Digestion begins in:", options: ["Stomach", "Small intestine", "Mouth", "Large intestine"], correctAnswer: 2},
        {id: 2, question: "Salivary amylase acts on:", options: ["Proteins", "Fats", "Starch", "Vitamins"], correctAnswer: 2},
        {id: 3, question: "Gastric juice contains:", options: ["HCl", "Pepsin", "Both", "Neither"], correctAnswer: 2},
        {id: 4, question: "Bile is produced by:", options: ["Pancreas", "Liver", "Gallbladder", "Stomach"], correctAnswer: 1},
        {id: 5, question: "Pancreatic juice contains:", options: ["Trypsin", "Lipase", "Amylase", "All of these"], correctAnswer: 3},
        {id: 6, question: "Most absorption occurs in:", options: ["Stomach", "Small intestine", "Large intestine", "Mouth"], correctAnswer: 1},
        {id: 7, question: "Vitamin C deficiency causes:", options: ["Scurvy", "Rickets", "Beriberi", "Pellagra"], correctAnswer: 0},
        {id: 8, question: "Vitamin D deficiency causes:", options: ["Scurvy", "Rickets", "Beriberi", "Pellagra"], correctAnswer: 1},
        {id: 9, question: "Iron deficiency causes:", options: ["Scurvy", "Anemia", "Rickets", "Goiter"], correctAnswer: 1},
        {id: 10, question: "Iodine deficiency causes:", options: ["Anemia", "Goiter", "Scurvy", "Rickets"], correctAnswer: 1},
        {id: 11, question: "Proteins are digested by:", options: ["Pepsin", "Trypsin", "Chymotrypsin", "All of these"], correctAnswer: 3},
        {id: 12, question: "Fats are digested by:", options: ["Lipase", "Amylase", "Pepsin", "Trypsin"], correctAnswer: 0},
        {id: 13, question: "Carbohydrates are digested by:", options: ["Pepsin", "Lipase", "Amylase", "Trypsin"], correctAnswer: 2},
        {id: 14, question: "Villi are present in:", options: ["Stomach", "Small intestine", "Large intestine", "Esophagus"], correctAnswer: 1},
        {id: 15, question: "Large intestine mainly absorbs:", options: ["Nutrients", "Water", "Vitamins", "Proteins"], correctAnswer: 1}
    ],
    
    15: [ // Excretion and Osmoregulation
        {id: 1, question: "Main excretory organ in humans:", options: ["Liver", "Lungs", "Kidneys", "Skin"], correctAnswer: 2},
        {id: 2, question: "Urea is formed in:", options: ["Kidneys", "Liver", "Lungs", "Skin"], correctAnswer: 1},
        {id: 3, question: "Functional unit of kidney:", options: ["Neuron", "Nephron", "Alveolus", "Villus"], correctAnswer: 1},
        {id: 4, question: "Glomerular filtration occurs in:", options: ["Bowman's capsule", "Loop of Henle", "Collecting duct", "Ureter"], correctAnswer: 0},
        {id: 5, question: "ADH controls:", options: ["Blood pressure", "Water reabsorption", "Glucose level", "Protein synthesis"], correctAnswer: 1},
        {id: 6, question: "Aldosterone controls:", options: ["Water reabsorption", "Sodium reabsorption", "Glucose reabsorption", "Protein synthesis"], correctAnswer: 1},
        {id: 7, question: "Dialysis is used when:", options: ["Heart fails", "Kidneys fail", "Liver fails", "Lungs fail"], correctAnswer: 1},
        {id: 8, question: "Ammonia is excreted by:", options: ["Mammals", "Birds", "Fish", "Reptiles"], correctAnswer: 2},
        {id: 9, question: "Uric acid is excreted by:", options: ["Fish", "Mammals", "Birds", "Amphibians"], correctAnswer: 2},
        {id: 10, question: "Urea is excreted by:", options: ["Fish", "Birds", "Mammals", "Insects"], correctAnswer: 2},
        {id: 11, question: "Malpighian tubules are found in:", options: ["Mammals", "Birds", "Insects", "Fish"], correctAnswer: 2},
        {id: 12, question: "Flame cells are found in:", options: ["Flatworms", "Roundworms", "Arthropods", "Vertebrates"], correctAnswer: 0},
        {id: 13, question: "Nephridia are found in:", options: ["Insects", "Earthworms", "Fish", "Birds"], correctAnswer: 1},
        {id: 14, question: "Contractile vacuoles are found in:", options: ["Amoeba", "Paramecium", "Both", "Neither"], correctAnswer: 2},
        {id: 15, question: "Osmoregulation maintains:", options: ["Water balance", "Salt balance", "Both", "Neither"], correctAnswer: 2}
    ],
    
    16: [ // Skeleton and Movement
        {id: 1, question: "Human skeleton has how many bones?", options: ["200", "206", "210", "220"], correctAnswer: 1},
        {id: 2, question: "Longest bone in human body:", options: ["Humerus", "Tibia", "Femur", "Radius"], correctAnswer: 2},
        {id: 3, question: "Smallest bone in human body:", options: ["Stapes", "Malleus", "Incus", "Hyoid"], correctAnswer: 0},
        {id: 4, question: "Vertebral column has:", options: ["24 vertebrae", "26 vertebrae", "28 vertebrae", "30 vertebrae"], correctAnswer: 1},
        {id: 5, question: "Ribs are attached to:", options: ["Vertebrae only", "Sternum only", "Both vertebrae and sternum", "Neither"], correctAnswer: 2},
        {id: 6, question: "Joints are classified based on:", options: ["Movement", "Structure", "Both", "Neither"], correctAnswer: 2},
        {id: 7, question: "Ball and socket joint is found in:", options: ["Knee", "Elbow", "Shoulder", "Wrist"], correctAnswer: 2},
        {id: 8, question: "Hinge joint is found in:", options: ["Shoulder", "Hip", "Knee", "Neck"], correctAnswer: 2},
        {id: 9, question: "Cardiac muscle is found in:", options: ["Heart", "Limbs", "Intestine", "Blood vessels"], correctAnswer: 0},
        {id: 10, question: "Smooth muscle is found in:", options: ["Heart", "Limbs", "Intestine", "Skeleton"], correctAnswer: 2},
        {id: 11, question: "Skeletal muscle is:", options: ["Voluntary", "Involuntary", "Smooth", "Cardiac"], correctAnswer: 0},
        {id: 12, question: "Tendons connect:", options: ["Bone to bone", "Muscle to bone", "Muscle to muscle", "Bone to cartilage"], correctAnswer: 1},
        {id: 13, question: "Ligaments connect:", options: ["Muscle to bone", "Bone to bone", "Muscle to muscle", "Tendon to muscle"], correctAnswer: 1},
        {id: 14, question: "Red blood cells are produced in:", options: ["Liver", "Spleen", "Bone marrow", "Kidneys"], correctAnswer: 2},
        {id: 15, question: "Calcium is important for:", options: ["Bone strength", "Muscle contraction", "Both", "Neither"], correctAnswer: 2}
    ]
};

// Global Variables
let currentChapter = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let startTime = null;
let timerInterval = null;

// Initialize
window.onload = function() {
    displayRandomQuote();
    setInterval(displayRandomQuote, 10000);
};

// Display Random Motivational Quote
function displayRandomQuote() {
    const quoteElement = document.getElementById('motivational-quote');
    if (quoteElement) {
        const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
        quoteElement.textContent = randomQuote;
    }
}

// Start Test
function startTest(chapterNumber) {
    currentChapter = chapterNumber;
    currentQuestionIndex = 0;
    userAnswers = new Array(15).fill(null);
    startTime = Date.now();
    
    document.getElementById('test-title').textContent = `Chapter ${chapterNumber}: ${chapterNames[chapterNumber]}`;
    showScreen('test-screen');
    startTimer();
    displayQuestion();
}

// Start Timer
function startTimer() {
    timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        document.getElementById('timer').textContent = 
            `Time: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

// Display Question
function displayQuestion() {
    const questions = questionBank[currentChapter];
    const question = questions[currentQuestionIndex];
    
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `
        <div class="question-box">
            <div class="question-text">
                <strong>Q${currentQuestionIndex + 1}.</strong> ${question.question}
            </div>
            <ul class="options-list">
                ${question.options.map((option, index) => `
                    <li class="option-item ${userAnswers[currentQuestionIndex] === index ? 'selected' : ''}" 
                        onclick="selectOption(${index})">
                        <div class="option-radio"></div>
                        <span>${String.fromCharCode(65 + index)}. ${option}</span>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
    
    updateProgress();
    updateNavigationButtons();
}

// Select Option
function selectOption(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;
    displayQuestion();
}

// Update Progress
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / 15) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
    document.getElementById('question-counter').textContent = `Question ${currentQuestionIndex + 1}/15`;
}

// Update Navigation Buttons
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    
    prevBtn.disabled = currentQuestionIndex === 0;
    prevBtn.style.opacity = currentQuestionIndex === 0 ? '0.5' : '1';
    
    if (currentQuestionIndex === 14) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
    }
}

// Previous Question
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

// Next Question
function nextQuestion() {
    if (currentQuestionIndex < 14) {
        currentQuestionIndex++;
        displayQuestion();
    }
}

// Submit Test
function submitTest() {
    const unanswered = userAnswers.filter(answer => answer === null).length;
    
    if (unanswered > 0) {
        const confirm = window.confirm(`You have ${unanswered} unanswered questions. Do you want to submit anyway?`);
        if (!confirm) return;
    }
    
    clearInterval(timerInterval);
    calculateResults();
}

// Calculate Results
function calculateResults() {
    const questions = questionBank[currentChapter];
    let correct = 0;
    let wrong = 0;
    let unattempted = 0;
    
    userAnswers.forEach((answer, index) => {
        if (answer === null) {
            unattempted++;
        } else if (answer === questions[index].correctAnswer) {
            correct++;
        } else {
            wrong++;
        }
    });
    
    const percentage = Math.round((correct / 15) * 100);
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;
    
    displayResults(correct, wrong, unattempted, percentage, minutes, seconds);
}

// Display Results
function displayResults(correct, wrong, unattempted, percentage, minutes, seconds) {
    document.getElementById('score-percentage').textContent = `${percentage}%`;
    document.getElementById('correct-count').textContent = correct;
    document.getElementById('wrong-count').textContent = wrong;
    document.getElementById('unattempted-count').textContent = unattempted;
    document.getElementById('total-score').textContent = `${correct}/15`;
    document.getElementById('time-taken').textContent = 
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    let message = '';
    let quoteCategory = '';
    
    if (percentage >= 90) {
        message = '🎉 Excellent! You have outstanding knowledge!';
        quoteCategory = 'excellent';
    } else if (percentage >= 75) {
        message = '👏 Great job! You have good understanding!';
        quoteCategory = 'good';
    } else if (percentage >= 50) {
        message = '👍 Good effort! Keep practicing!';
        quoteCategory = 'average';
    } else {
        message = '📚 Need more practice! Don\'t give up!';
        quoteCategory = 'poor';
    }
    
    document.getElementById('result-message').querySelector('p').textContent = message;
    
    const randomResultQuote = resultQuotes[quoteCategory][Math.floor(Math.random() * resultQuotes[quoteCategory].length)];
    document.getElementById('result-quote').textContent = randomResultQuote;
    
    showScreen('result-screen');
}

// Review Answers
function reviewAnswers() {
    const questions = questionBank[currentChapter];
    const reviewContent = document.getElementById('review-content');
    
    let html = '';
    questions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correctAnswer;
        const status = userAnswer === null ? 'unattempted' : (isCorrect ? 'correct' : 'wrong');
        
        html += `
            <div class="review-question ${status}">
                <div class="review-question-text">
                    <strong>Q${index + 1}.</strong> ${question.question}
                </div>
                <div class="review-options">
                    ${question.options.map((option, optIndex) => {
                        let className = 'review-option';
                        if (optIndex === question.correctAnswer) {
                            className += ' correct-answer';
                        }
                        if (optIndex === userAnswer && !isCorrect) {
                            className += ' user-answer';
                        }
                        return `<div class="${className}">
                            ${String.fromCharCode(65 + optIndex)}. ${option}
                            ${optIndex === question.correctAnswer ? ' ✅ Correct' : ''}
                            ${optIndex === userAnswer && !isCorrect ? ' ❌ Your Answer' : ''}
                        </div>`;
                    }).join('')}
                </div>
            </div>
        `;
    });
    
    reviewContent.innerHTML = html;
    showScreen('review-screen');
}

// Retake Test
function retakeTest() {
    startTest(currentChapter);
}

// Go Home
function goHome() {
    showScreen('home-screen');
    if (timerInterval) {
        clearInterval(timerInterval);
    }
}

// Exit Test
function exitTest() {
    const confirm = window.confirm('Are you sure you want to exit? Your progress will be lost.');
    if (confirm) {
        goHome();
    }
}

// Show Screen
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}
