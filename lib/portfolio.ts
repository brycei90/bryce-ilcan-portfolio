export type Project = {
  slug: string; shortTitle: string; title: string; category: string; categories: string[]; status: string;
  summary: string; visual: string; tags: string[]; featured?: boolean; confidential?: boolean;
  coverImage?: { src: string; alt: string; fit?: "cover" | "contain" };
  images?: { src: string; alt: string; caption: string; wide?: boolean }[];
  requirementsTitle?: string;
  overview: string; requirements: string[]; contributions: string[]; process: string; results: string;
  media: string[];
};

export const projects: Project[] = [
  {
    slug: "phase-shifted-full-bridge-converter", shortTitle: "725 W PSFB Converter", title: "725 W Phase-Shifted Full-Bridge Converter",
    category: "Power Electronics", categories: ["Power Electronics", "PCB Design", "Research"], status: "Active research", visual: "converter", featured: true, confidential: true,
    summary: "A 324 V-to-12 V phase-shifted full-bridge converter with synchronous rectification, multilevel secondary architecture, and custom planar magnetics.",
    tags: ["PLECS", "Ansys Maxwell", "FEMM", "Planar Magnetics", "4-Layer PCB"],
    coverImage: { src: "/projects/psfb-converter/pcb-3d-render.png", alt: "Altium 3D render of the 725 W phase-shifted full-bridge converter PCB" },
    images: [
      { src: "/projects/psfb-converter/pcb-3d-render.png", alt: "Top-down Altium 3D render of the phase-shifted full-bridge converter PCB", caption: "Full-board 3D render — power stages, planar magnetics, control interfaces, cooling provisions, and high-voltage layout" },
      { src: "/projects/psfb-converter/ansys-maxwell-model.png", alt: "Ansys Maxwell finite-element model of the converter planar magnetic structure and windings", caption: "Ansys Maxwell model — finite-element analysis of the planar magnetic structure, winding geometry, and field distribution" },
      { src: "/projects/psfb-converter/control-auxiliary-power.png", alt: "ADC filtering, auxiliary power supplies, cooling, and bootstrap schematic", caption: "Support circuitry — ADC anti-aliasing filters, isolated and non-isolated auxiliary supplies, fan connections, and gate-driver bootstrap circuits" },
      { src: "/projects/psfb-converter/launchpad-protection-interface.png", alt: "LaunchPad control headers and isolated protection-signal schematic", caption: "Control interface — LaunchPad PWM and ADC headers with isolated primary-side protection signals" },
      { src: "/projects/psfb-converter/debugging-leds.png", alt: "Debugging LED schematic for the converter power domains", caption: "Debugging indicators — visual monitoring of primary, secondary, and low-voltage power rails", wide: true },
    ],
    overview: "This University of Calgary research project explores a phase-shifted full-bridge converter with synchronous rectification. Its secondary-side architecture can be stacked to reduce output ripple and lower the current handled by an individual channel.",
    requirements: ["Nominal 324 V input", "12 V regulated output", "725 W power target", "Synchronous rectification", "Stackable multilevel secondary", "Custom planar transformer and inductor"],
    contributions: ["Converter architecture and component-level design", "PLECS switching and open-loop simulations", "Open-loop modulation development", "Analytical magnetics verification", "FEMM and Ansys Maxwell electromagnetic analysis", "Four-layer PCB design and routing"],
    process: "I moved between analytical calculations, switching simulation, electromagnetic finite-element analysis, and PCB implementation. This iterative workflow allowed control, losses, magnetics, and physical layout to inform one another before fabrication.",
    results: "The architecture, control approach, magnetics geometry, and PCB are in active development. The next major milestones are design review, fabrication, safe bring-up, and comparison of measured performance against simulation.",
    media: ["PLECS waveforms", "Converter architecture", "Ansys Maxwell model", "Planar PCB layout"]
  },
  {
    slug: "nrf52840-bike-computer", shortTitle: "nRF52840 Bike Computer", title: "Custom nRF52840 Bike Computer",
    category: "Embedded Systems", categories: ["Embedded Systems", "PCB Design"], status: "In development", visual: "embedded", featured: true,
    summary: "A component-level cycling computer with custom nRF52840 hardware, GNSS, motion and pressure sensing, display, storage, charging, and battery monitoring.",
    tags: ["nRF52840", "Altium", "GNSS", "BQ24074", "Embedded C"],
    coverImage: { src: "/projects/bike-computer/3d-view.png", alt: "Altium 3D render of the custom nRF52840 bike computer PCB" },
    images: [
      { src: "/projects/bike-computer/3d-view.png", alt: "Top-down Altium 3D render of the custom bike computer PCB", caption: "PCB 3D render — custom nRF52840 board with GNSS, display, USB-C, controls, and sensors" },
      { src: "/projects/bike-computer/peripherals.png", alt: "Bike computer GNSS, flash memory, barometer, accelerometer, BLE, and SWD schematic", caption: "Peripheral architecture — GNSS, QSPI flash, barometer, accelerometer, BLE, and SWD" },
      { src: "/projects/bike-computer/power-management.png", alt: "Bike computer USB-C charging and LiPo power-management schematic", caption: "Power management — USB-C input, BQ24074 charging, 3.3 V regulation, and fuel gauging" },
      { src: "/projects/bike-computer/mcu.png", alt: "nRF52840 microcontroller schematic for the custom bike computer", caption: "MCU subsystem — nRF52840 power, clocks, RF matching, USB, display, and digital interfaces" },
    ],
    overview: "The goal is to build a complete bike computer around a bare nRF52840-QIAA SoC rather than a development board, combining sensing, storage, display, USB, debugging, and battery management on a purpose-built PCB.",
    requirements: ["Bare nRF52840-QIAA SoC", "GNSS over UART", "Accelerometer and barometer over I²C", "QSPI flash and SPI LCD", "USB programming and SWD debugging", "Protected single-cell LiPo power system"],
    contributions: ["System architecture", "Component selection", "Schematic capture", "Digital interface planning", "BQ24074 power-path charger integration", "Battery protection and fuel gauging", "Automatic USB/battery source selection", "USB ESD protection and PCB layout"],
    process: "I started from the use cases—automatic wake, speed, location, altitude, and elevation gain—and translated them into sensor, interface, memory, display, programming, and power requirements. The PCB is designed to support structured bring-up before full firmware integration.",
    results: "Hardware development is underway. After fabrication, I will validate each power rail and interface, then develop the embedded firmware from scratch and integrate the sensors incrementally.",
    media: ["System block diagram", "Schematic capture", "Power architecture", "PCB 3D render"]
  },
  {
    slug: "stm32-bluetooth-rc-car", shortTitle: "STM32 Bluetooth RC Car", title: "STM32 Bluetooth-Controlled RC Car",
    category: "Embedded Systems", categories: ["Embedded Systems"], status: "Completed", visual: "embedded",
    summary: "Embedded C firmware for a course-provided STM32 RC-car PCB, integrating Bluetooth commands with PWM motor and servo control, LED outputs, and ultrasonic sensing.",
    tags: ["STM32", "Embedded C", "UART", "PWM", "Bluetooth", "Ultrasonic Sensors", "Motor Control"],
    coverImage: { src: "/projects/stm32-rc-car/course-provided-stm32-board.png", alt: "Course-provided STM32 development PCB used for the Bluetooth-controlled RC car" },
    images: [
      { src: "/projects/stm32-rc-car/course-provided-stm32-board.png", alt: "Course-provided STM32 development PCB used for the RC-car firmware project", caption: "Course-provided STM32 hardware — my work focused on firmware, Bluetooth communication, peripheral integration, and debugging rather than PCB design" },
    ],
    requirementsTitle: "Technical highlights",
    overview: "Developed embedded C firmware for an STM32-based RC car using a course-provided PCB. Implemented a UART Bluetooth command interface that translated wireless commands into real-time vehicle control. Integrated PWM motor-speed control, servo steering, LED outputs, and ultrasonic distance sensing. Debugged communication and peripheral-integration issues to achieve reliable end-to-end operation. The PCB was provided for the course; my primary contribution was firmware development, Bluetooth communication, peripheral integration, and debugging—not PCB design.",
    requirements: ["UART Bluetooth communication and command parsing", "PWM motor-speed and servo-steering control", "Ultrasonic distance sensing", "LED status and control outputs", "Embedded C development and hardware debugging", "Integration of multiple STM32 peripherals into one operating system"],
    contributions: ["Developed embedded C firmware on the course-provided PCB", "Implemented the UART Bluetooth command interface", "Translated wireless commands into real-time vehicle control", "Integrated PWM motor-speed and servo-steering control", "Integrated ultrasonic sensing and LED outputs", "Debugged communication and peripheral-integration issues"],
    process: "I developed and tested each firmware-controlled function on the course-provided hardware, then integrated the UART command path with the vehicle outputs and sensor input. Debugging focused on communication behavior and interactions between the STM32 peripherals until the full control path operated reliably.",
    results: "The finished firmware provided reliable end-to-end Bluetooth control of the RC car, including motor speed, servo steering, LED outputs, and ultrasonic distance sensing. The project demonstrates firmware and system-integration work on provided hardware; it does not represent a PCB design contribution.",
    media: ["RC-car demonstration video"]
  },
  {
    slug: "uav-cell-monitoring-board", shortTitle: "UAV Cell-Monitoring PCB", title: "UAV Li-ion Cell-Monitoring Board",
    category: "PCB Design", categories: ["PCB Design", "UAV & Avionics", "Embedded Systems"], status: "Designed", visual: "battery", featured: true,
    summary: "A BQ76952-based board that measures UAV battery-cell voltage and temperature and reports data to a Raspberry Pi through a multiplexed I²C architecture.",
    tags: ["BQ76952", "Altium", "I²C", "Raspberry Pi", "Li-ion"],
    coverImage: { src: "/projects/cell-monitoring-board/3d-view.png", alt: "Altium 3D render of the SUAV BQ76952 cell-monitoring board" },
    images: [
      { src: "/projects/cell-monitoring-board/3d-view.png", alt: "Altium 3D render of the completed SUAV cell-monitoring PCB", caption: "Full-board 3D render — six-channel SUAV battery cell-monitoring architecture" },
      { src: "/projects/cell-monitoring-board/schematic.png", alt: "BQ76952 cell-monitoring channel schematic in Altium Designer", caption: "Representative BQ76952 monitoring channel — cell inputs, filtering, thermistors, and I²C" },
    ],
    overview: "A three-person Schulich UAV project to provide the aircraft with detailed battery telemetry. The board interfaces the BQ76952 monitor with cell-voltage and temperature sensing and connects multiple devices to a Raspberry Pi through an I²C multiplexer.",
    requirements: ["Li-ion cell-voltage monitoring", "Temperature sensing", "BQ76952 integration", "I²C host interface", "Multiplexer support", "Aircraft-ready electrical integration"],
    contributions: ["Led a three-person design team", "Translated system needs into board requirements", "Developed the Altium schematic", "Supported PCB architecture and layout", "Planned Raspberry Pi communications", "Coordinated integration decisions"],
    process: "The project required balancing device requirements, pack-level safety, host communication, connectorization, and integration constraints. I coordinated the design while remaining directly involved in the electrical implementation.",
    results: "The board design establishes a scalable route for collecting voltage and temperature telemetry from the UAV battery system. Public documentation is limited to non-sensitive design context.",
    media: ["System architecture", "Altium schematic", "PCB layout", "Hardware integration"]
  },
  {
    slug: "autonomous-drone-gcs", shortTitle: "Autonomous Drone & GCS", title: "Autonomous Drone and Ground Control Station",
    category: "UAV & Avionics", categories: ["UAV & Avionics", "Software"], status: "Completed", visual: "drone", featured: true,
    summary: "An ArduCopter aircraft with waypoint navigation, a custom web GCS for command and telemetry, live video, and purpose-built 6S1P Li-ion packs.",
    tags: ["ArduCopter", "pymavlink", "React", "FastAPI", "WebSockets"],
    coverImage: { src: "/projects/autonomous-drone/outdoor-airframe.jpeg", alt: "Custom autonomous quadcopter configured for outdoor flight testing", fit: "cover" },
    images: [
      { src: "/projects/autonomous-drone/outdoor-airframe.jpeg", alt: "Custom autonomous quadcopter resting on a bench before outdoor flight testing", caption: "Flight-test configuration — assembled quadcopter with GNSS, telemetry, and propulsion hardware" },
      { src: "/projects/autonomous-drone/workbench-integration.jpeg", alt: "Custom autonomous quadcopter during electronics integration on a workbench", caption: "Workbench integration — airframe wiring, GNSS, telemetry antenna, motors, and power-system installation" },
      { src: "/projects/autonomous-drone/custom-gcs-flight-operations.png", alt: "Custom web ground control station showing a Calgary live map, telemetry graph, vehicle-link status, arming control, flight-mode selector, and takeoff control", caption: "Custom GCS flight-operations interface — live mapping, MAVLink telemetry, vehicle status, arming, flight-mode, and takeoff controls", wide: true },
    ],
    overview: "This project combined aircraft hardware, autonomous mission execution, a web-based operator interface, telemetry, live video, and custom battery fabrication into one end-to-end autonomous system.",
    requirements: ["Waypoint navigation", "Command and telemetry", "Web-based interface", "Longer-duration power system", "Repeatable autonomous testing"],
    contributions: ["Configured ArduCopter", "Implemented waypoint missions", "Built the web ground control station", "Integrated pymavlink telemetry", "Used FastAPI and WebSockets", "Fabricated 6S1P 4200 mAh Li-ion packs"],
    process: "I developed the aircraft and operator interface together so real mission needs drove the UI and telemetry architecture. Flight testing was used to validate navigation, communications, video, and battery performance as a complete system.",
    results: "The system completed autonomous waypoint workflows while providing remote command, live telemetry, and video through the custom GCS.",
    media: ["Drone airframe", "Ground control interface", "Mission route", "Flight-test setup"]
  },
  {
    slug: "embedded-in-embedded", shortTitle: "Embedded in Embedded", title: "Embedded in Embedded with Garmin",
    category: "Embedded Systems", categories: ["Embedded Systems", "Software"], status: "Completed", visual: "firmware",
    summary: "Hands-on nRF52840 and Zephyr development through a University of Calgary extracurricular program led by Garmin engineers.",
    tags: ["Zephyr", "C", "nRF52840", "Device Trees", "GPIO"],
    coverImage: { src: "/projects/embedded-in-embedded/nrf52840-development-board.jpeg", alt: "Nordic Semiconductor nRF52840 development board with an attached LCD display" },
    images: [
      { src: "/projects/embedded-in-embedded/nrf52840-development-board.jpeg", alt: "Nordic Semiconductor nRF52840 development board with an attached LCD display", caption: "Program hardware — Nordic nRF52840 development board and LCD used for Zephyr firmware exercises" },
    ],
    overview: "A Garmin engineer-led embedded systems program using the Nordic nRF52840 development board, embedded C, Zephyr RTOS, and a touchscreen LCD.",
    requirements: ["nRF52840 development board", "Embedded C", "Zephyr RTOS workflow", "GPIO interfaces", "Devicetree configuration", "Touchscreen LCD integration"],
    contributions: ["Configured and built Zephyr applications", "Implemented GPIO-driven peripheral behavior", "Worked with Devicetree configuration", "Developed a reaction-time testing application", "Integrated a touchscreen LCD", "Applied hardware-oriented debugging practices"],
    process: "Engineer-led exercises connected firmware structure with physical peripherals, culminating in a reaction-time testing application that combined input handling, display behavior, and repeatable embedded builds.",
    results: "Completed a working touchscreen reaction-time application and built a practical foundation in Zephyr RTOS, Devicetree, embedded C, and hardware-software integration.",
    media: ["Development board", "Zephyr project", "Peripheral test", "Debug workflow"]
  },
  {
    slug: "custom-uav-esc", shortTitle: "Custom UAV ESC", title: "Custom Electronic Speed Controller",
    category: "Power Electronics", categories: ["Power Electronics", "PCB Design", "UAV & Avionics"], status: "In development", visual: "esc",
    summary: "A custom motor controller under development for Schulich UAV, spanning requirements, topology selection, sensing, gate drive, protection, and validation.",
    tags: ["Motor Control", "Gate Drive", "MOSFETs", "Protection", "Testing"],
    overview: "An active Schulich UAV electrical project focused on developing a custom ESC suited to the aircraft's propulsion and integration needs.",
    requirements: ["Propulsion-system requirements", "Power-stage topology", "Gate-drive architecture", "Current and voltage sensing", "Fault protection", "Instrumented validation"],
    contributions: ["Project leadership", "Requirements planning", "Architecture review", "Team coordination", "Design-review coordination", "Test-planning oversight"],
    process: "The project uses staged development: system requirements, architecture and loss analysis, schematic review, low-risk subsystem testing, PCB implementation, and instrumented propulsion validation.",
    results: "Development is underway. Technical details and measured results will be added as design-review and validation milestones are completed.",
    media: ["Requirements", "Power-stage architecture", "PCB design", "Test-stand results"]
  }
];

export const categories = ["All", "Power Electronics", "PCB Design", "Embedded Systems", "UAV & Avionics", "Software", "Research"];
