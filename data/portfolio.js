export const profile = {
  name: 'Eya Sahli',
  role: 'Signal, RF & Embedded Systems Engineer',
  location: 'Bourg-la-Reine (92340), France',
  email: 'sahlieya122@gmail.com',
  phone: '+33 7 54 20 07 64',
  intro:
    'Engineer in Signal and Telecommunications with a background in Embedded Electronic Systems and Biomedical Engineering. I work at the intersection of RF instrumentation, signal processing, embedded electronics and applied AI, with hands-on experience in electromagnetic simulation, VNA measurements, MATLAB/Python modelling and experimental validation.'
};

export const highlights = [
  ['RF / Microwave', 'HFSS · CST · VNA · characterization'],
  ['Signal Processing', 'MATLAB · Python · filtering · time-frequency'],
  ['Embedded Systems', 'STM32 · FPGA · VHDL · ADC · DMA'],
  ['Applied AI', 'PyTorch · TensorFlow/Keras · CNN · evaluation']
];

export const experiences = [
  {
    year: '2025',
    organization: 'Grenoble INP · IDYLICC Technologies · LCIS Laboratory',
    title: 'Chipless RFID Detection & Decoding in an Embedded RF Environment',
    summary:
      'Research-oriented RF project combining electromagnetic modelling, experimental measurements and algorithm validation on real data.',
    bullets: [
      'Designed and simulated RF and microwave structures using Ansys HFSS and CST Studio Suite.',
      'Performed RF measurements and characterization with a Vector Network Analyzer (VNA).',
      'Built a MATLAB simulator for chipless-RFID reading environments, including realistic measurement imperfections.',
      'Evaluated spectral-entropy detection and matched filtering on experimental data, with verification through a Python-based internal tool.',
      'Contributed to FPGA implementation of the proposed processing approaches.'
    ],
    tags: ['RF', 'Microwave', 'HFSS', 'CST', 'VNA', 'MATLAB', 'Python', 'FPGA', 'Experimental Validation']
  },
  {
    year: '2023',
    organization: 'University of Tunis El Manar · ISTMT Laboratory',
    title: 'Energy Harvesting for Autonomous Systems',
    summary:
      'Design and integration of a hybrid energy-recovery system combining piezoelectric acoustic conversion and solar energy.',
    bullets: [
      'Designed an electronic measurement and recovery chain using a piezoelectric sensor.',
      'Designed a second circuit for solar-energy conversion and integrated both circuits into a hybrid autonomous system.',
      'Performed component selection, analog/digital simulation, PCB routing, assembly and connectivity checks.',
      'Validated the modules experimentally and analysed their functional behaviour.'
    ],
    tags: ['Energy Harvesting', 'Piezoelectric', 'Solar Energy', 'Analog Electronics', 'PCB', 'Sensors', 'Validation']
  },
  {
    year: '2022',
    organization: 'University of Tunis El Manar · ISTMT Laboratory',
    title: 'Non-Invasive NIR Glucose Meter with Bluetooth',
    summary:
      'Biomedical instrumentation project focused on optical sensing, electronics and connected-system prototyping.',
    bullets: [
      'Modelled and designed a measurement chain based on near-infrared light absorption through the skin.',
      'Prototyped a non-invasive device using spectrometry principles and optoelectronic sensors.',
      'Integrated sensing, analog/digital electronics and wireless connectivity in a biomedical context.'
    ],
    tags: ['Biomedical Instrumentation', 'NIR', 'Sensors', 'IoT', 'Arduino', 'LabVIEW', 'C++']
  }
];

export const projects = [
  {
    featured: true,
    title: 'Deep Learning Image Classification',
    category: 'Applied AI',
    year: '2025',
     image: '/Projects/classification.png',
    description:
      'Designed and trained convolutional neural networks using MATLAB and Python/PyTorch. Developed a custom CNN architecture, evaluated it on CIFAR-10 and extended experiments to Fashion-MNIST and SVHN, covering augmentation, hyperparameter tuning and rigorous model evaluation.',
    tags: ['Python', 'PyTorch', 'MATLAB', 'CNN', 'CIFAR-10', 'Data Augmentation', 'Model Evaluation'],
    visual: 'ai'
  },
  {
    featured: true,
    title: 'MPEG Video Processing & Digital Watermarking',
    category: 'Multimedia Signal Processing',
    year: '2025',
    image: '/Projects/mpeg.png',
    description:
      'Decoded MPEG video streams and reconstructed intra/inter frames using motion vectors and quantization matrices. Implemented scrambling/descrambling and digital watermarking mechanisms, then analysed visual quality and robustness.',
    tags: ['MATLAB', 'MPEG', 'Video Coding', 'Motion Vectors', 'Quantization', 'Watermarking'],
    visual: 'video'
  },
  {
    featured: true,
    title: 'LPC Vocoder: Speech Analysis & Synthesis',
    category: 'Speech Processing',
    year: '2024',
    image: '/Projects/lpc.png',
    description:
      'Implemented a Linear Predictive Coding vocoder using the source-filter model, estimated LPC coefficients and reconstructed speech from a compact parametric representation. Studied model order, spectral accuracy and perceptual quality.',
    tags: ['MATLAB', 'LPC', 'Speech Processing', 'Source-Filter Model', 'Spectral Analysis'],
    visual: 'audio'
  },
  {
    featured: true,
    title: 'CO-OFDM Chain & 4G/LTE Simulation',
    category: 'Digital Communications',
    year: '2025',
    image: '/Projects/co-ofdm.png',
    description:
      'Implemented and analysed OFDM communication chains with modulation, channel modelling and compensation. Evaluated transmission performance through communication metrics and constellation behaviour under different channel conditions.',
    tags: ['MATLAB', 'CO-OFDM', 'OFDM', '4G/LTE', 'QAM', 'BER', 'EVM', 'OSNR'],
    visual: 'ofdm'
  },
  {
    title: 'Non-Stationary Signal Processing',
    category: 'Signal Processing',
    year: '2024',
    image: '/Projects/non-stationary.png',
    description:
      'Applied DCT and Wavelet Packet Decomposition for compression and investigated interference suppression using the Wigner-Ville distribution and time-frequency representations.',
    tags: ['MATLAB', 'DCT', 'WPD', 'Wavelets', 'Wigner-Ville', 'Time-Frequency'],
    visual: 'signal'
  },
  {
    title: 'Oscillatory Signal Acquisition with STM32',
    category: 'Embedded Systems',
    year: '2023',
    image: '/Projects/stm32.png',
    description:
      'Built an embedded acquisition chain using ADC sampling, timers, asynchronous UART interfaces and DMA-based transfers for efficient signal capture and debugging.',
    tags: ['STM32', 'C', 'ARM Cortex', 'ADC', 'UART', 'DMA', 'STM32CubeIDE'],
    visual: 'embedded'
  },
  {
    title: 'FPGA-Based Stepper Motor Control',
    category: 'Digital Hardware',
    year: '2024',
    image: '/Projects/fpga.png',
    description:
      'Developed VHDL modules and testbenches, then completed functional simulation, placement-and-routing, timing analysis, implementation and validation.',
    tags: ['FPGA', 'VHDL', 'Xilinx', 'Testbench', 'Timing Analysis'],
    visual: 'fpga'
  },
  {
    title: 'Hand Movement Recognition Embedded System',
    category: 'Sensors & Robotics',
    year: '2024',
    image: '/Projects/hand-movement.png',
    description:
      'Designed an embedded gesture interface around an MPU6050 IMU, including accelerometer/gyroscope acquisition, I²C communication, microcontroller processing and real-time LCD display.',
    tags: ['Arduino', 'C/C++', 'MPU6050', 'IMU', 'I²C', 'Sensors'],
    visual: 'imu'
  }
];

export const skills = [
  {
    title: 'RF & Electromagnetics',
    items: [
      'Ansys HFSS',
      'CST Studio Suite',
      'VNA Measurements',
      'RF Characterization',
      'Microwave Structures'
    ],
    image: '/skills/rf.png',
    accent: 'rgba(0, 120, 170, 0.45)'
  },

  {
    title: 'Signal Processing',
    items: [
      'MATLAB',
      'Python',
      'FFT / STFT',
      'Wavelets',
      'DCT / WPD',
      'Matched Filtering',
      'Spectral Analysis'
    ],
    image: '/skills/signal-processing.png',
    accent: 'rgba(61, 64, 180, 0.45)'
  },

  {
    title: 'Embedded & Hardware',
    items: [
      'STM32',
      'FPGA',
      'VHDL',
      'Verilog',
      'Arduino',
      'ADC',
      'DMA',
      'UART',
      'I²C'
    ],
    image: '/skills/embedded-systems.png',
    accent: 'rgba(0, 140, 120, 0.45)'
  },

  {
    title: 'AI & Data',
    items: [
      'PyTorch',
      'TensorFlow / Keras',
      'CNN',
      'Image Classification',
      'Data Augmentation',
      'Model Evaluation'
    ],
    image: '/skills/applied-ai.png',
    accent: 'rgba(0, 110, 140, 0.45)'
  },

  {
    title: 'Electronics & Instrumentation',
    items: [
      'Analog / Digital Electronics',
      'Sensors',
      'PCB Design',
      'Altium Designer',
      'Proteus',
      'LabVIEW'
    ],
    image: '/skills/pcb.png',
    accent: 'rgba(0, 110, 140, 0.45)'
  },

  {
    title: 'Programming',
    items: [
      'Python',
      'MATLAB',
      'C',
      'C++',
      'C#',
      'VHDL',
      'Bash',
      'Java'
    ],
    image: '/skills/progra.png',
    accent: 'rgba(0, 110, 140, 0.45)'
  }
];

export const education = [
  {
    period: '2024 — 2025',
    school: 'Bretagne INP — École Nationale d’Ingénieurs de Brest (ENIB)',
    degree: 'Master 2 — Signal and Telecommunications',
    place: 'Brest, France'
  },
  {
    period: '2023 — 2024',
    school: 'Institut Supérieur des Technologies Médicales de Tunis (ISTMT)',
    degree: 'Master 1 — Embedded Electronic Systems',
    place: 'Tunis, Tunisia'
  },
  {
    period: '2020 — 2023',
    school: 'Institut Supérieur des Technologies Médicales de Tunis (ISTMT)',
    degree: 'Bachelor’s Degree — Biomedical Engineering',
    place: 'Tunis, Tunisia'
  }
];

export const certification = {
  year: '2026',
  title: 'Applications of AI for Anomaly Detection',
  issuer: 'NVIDIA',
  image: '/skills/nvidia-cert.png',
  accent: 'rgba(20, 50, 55, 0.55)',
  featured: true
};
