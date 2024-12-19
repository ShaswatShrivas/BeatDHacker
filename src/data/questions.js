const questionsData = {
    easy: [
        {
            question: "What is phishing?",
            options: ["A sport", "Hacking through emails", "Password cracking", "None of the above"],
            correct: 1,
            explanation: "Phishing involves tricking users into sharing sensitive information through fake emails or links."
        },
        {
            question: "Which of the following is a strong password?",
            options: ["123456", "password", "Qw!8xT3a", "abcdef"],
            correct: 2,
            explanation: "A strong password should contain a mix of letters, numbers, and special characters."
        },
        {
            question: "What does HTTPS stand for?",
            options: ["Hypertext Transfer Protocol", "Hypertext Transfer Protocol Secure", "Hypertext Transport Protocol", "Hyperlink Transfer Protocol"],
            correct: 1,
            explanation: "HTTPS is a secure version of HTTP, providing encrypted communication."
        },
        {
            question: "Which of these is a common type of malware?",
            options: ["Virus", "Spam", "Firewall", "Cloud"],
            correct: 0,
            explanation: "Viruses are a type of malware that can infect computers and other devices."
        },
        {
            question: "What is a firewall used for?",
            options: ["Browsing the internet", "Protecting against unauthorized access", "Creating websites", "None of the above"],
            correct: 1,
            explanation: "Firewalls help protect networks by filtering incoming and outgoing traffic based on security rules."
        },
        {
            question: "What does two-factor authentication (2FA) add to the login process?",
            options: ["A second password", "An extra layer of security", "A captcha", "None of the above"],
            correct: 1,
            explanation: "2FA requires two forms of identification, enhancing security."
        },
        {
            question: "Which of the following is not an example of social engineering?",
            options: ["Phishing", "Tailgating", "SQL Injection", "Pretexting"],
            correct: 2,
            explanation: "SQL Injection is a code-based attack, whereas the others are techniques to manipulate people."
        },
        {
            question: "What does VPN stand for?",
            options: ["Virtual Private Network", "Very Private Network", "Virtual Personal Network", "Verified Private Network"],
            correct: 0,
            explanation: "VPNs provide a secure connection over public networks."
        },
        {
            question: "What is the main purpose of antivirus software?",
            options: ["To browse faster", "To protect against malware", "To design web pages", "To manage files"],
            correct: 1,
            explanation: "Antivirus software detects, prevents, and removes malware."
        },
        {
            question: "Which of the following is a sign of a phishing attempt?",
            options: ["Receiving an email with a suspicious link", "Getting a call from a known contact", "Using a secure website", "Downloading from a trusted source"],
            correct: 0,
            explanation: "Phishing attempts often involve suspicious links or requests for personal information."
        },
        {
            question: "What should you do if you receive a suspicious email?",
            options: ["Open it immediately", "Delete it", "Forward it to friends", "Ignore it"],
            correct: 1,
            explanation: "Deleting suspicious emails helps prevent potential phishing attacks."
        },
        {
            question: "What does a padlock icon in the browser address bar indicate?",
            options: ["The website is secure", "The website is a favorite", "The website is loading", "The website is popular"],
            correct: 0,
            explanation: "A padlock icon indicates a secure, encrypted connection."
        },
        {
            question: "Which practice helps protect your personal information online?",
            options: ["Using the same password for all accounts", "Sharing passwords with friends", "Regularly updating passwords", "Ignoring security updates"],
            correct: 2,
            explanation: "Regularly updating passwords helps protect against unauthorized access."
        },
        {
            question: "What is the primary purpose of encrypting data?",
            options: ["To speed up processing", "To protect data integrity", "To make data unreadable to unauthorized users", "To reduce storage space"],
            correct: 2,
            explanation: "Encryption ensures that data remains confidential by making it unreadable to unauthorized users."
        },
        {
            question: "What is a common method for cybercriminals to distribute malware?",
            options: ["Through email attachments", "By writing books", "Using secure websites", "Through radio broadcasts"],
            correct: 0,
            explanation: "Malware is commonly distributed through malicious email attachments."
        },
    ],
        medium: [
            {
                question: "What is ransomware?",
                options: ["Software that encrypts files and demands payment", "A type of antivirus", "A harmless prank", "A network tool"],
                correct: 0,
                explanation: "Ransomware encrypts victims' files and demands payment to restore access."
            },
            {
                question: "Which of the following is an example of multi-factor authentication (MFA)?",
                options: ["Using a password and a PIN", "Using a fingerprint and a password", "Using only a password", "Using only a security question"],
                correct: 1,
                explanation: "MFA involves using two or more independent factors for authentication."
            },
            {
                question: "What is a zero-day vulnerability?",
                options: ["A vulnerability exploited on the same day it is discovered", "An outdated software", "A type of virus", "A security patch"],
                correct: 0,
                explanation: "Zero-day vulnerabilities are exploited by attackers before developers can release a fix."
            },
            {
                question: "What is social engineering?",
                options: ["Manipulating people into revealing confidential information", "Developing social media apps", "Building social networks", "Creating engineering software"],
                correct: 0,
                explanation: "Social engineering exploits human psychology to gain access to confidential information."
            },
            {
                question: "What is an SSL certificate used for?",
                options: ["Securing communications over the internet", "Sending emails", "Saving documents", "Installing software"],
                correct: 0,
                explanation: "SSL certificates secure data transmission between a user's browser and a website."
            },
            {
                question: "What is the principle of least privilege?",
                options: ["Giving users minimal access necessary", "Giving users full access", "Blocking all access", "Using default permissions"],
                correct: 0,
                explanation: "The principle of least privilege ensures users have the minimum access required to perform their tasks."
            },
            {
                question: "What is a DDoS attack?",
                options: ["A method to improve website speed", "A type of denial-of-service attack using multiple compromised systems", "A new software update", "A security measure"],
                correct: 1,
                explanation: "Distributed Denial-of-Service (DDoS) attacks overload a server with traffic from multiple sources, causing disruptions."
            },
            {
                question: "What is the purpose of a honeypot in cybersecurity?",
                options: ["To trap and analyze malicious activity", "To store user data", "To improve network speed", "To secure email communications"],
                correct: 0,
                explanation: "Honeypots are decoy systems designed to detect and analyze unauthorized access or attacks."
            },
            {
                question: "Which of the following is a characteristic of a botnet?",
                options: ["A network of infected devices controlled by an attacker", "A secure network protocol", "A collection of secure servers", "A programming language"],
                correct: 0,
                explanation: "Botnets are networks of compromised devices controlled remotely by attackers to perform coordinated cyberattacks."
            },
            {
                question: "What is the main goal of a penetration test (pen test)?",
                options: ["To assess system vulnerabilities and security weaknesses", "To improve system performance", "To backup data", "To install new software"],
                correct: 0,
                explanation: "Penetration tests simulate cyberattacks to identify and address security weaknesses."
            },
            {
                question: "Which of the following is an example of an insider threat?",
                options: ["A former employee stealing data", "A phishing attack", "A ransomware attack", "A DDoS attack"],
                correct: 0,
                explanation: "Insider threats come from within the organization, often involving employees or former employees."
            },
            {
                question: "What does the term 'brute force attack' refer to?",
                options: ["Attempting all possible password combinations", "Using physical force", "Exploiting software vulnerabilities", "None of the above"],
                correct: 0,
                explanation: "Brute force attacks try all possible combinations to guess a password or encryption key."
            },
            {
                question: "What is the purpose of a digital signature?",
                options: ["To verify the authenticity and integrity of a message or document", "To encrypt files", "To create a backup", "To manage user accounts"],
                correct: 0,
                explanation: "Digital signatures ensure that a message or document has not been altered and verifies the sender's identity."
            },
            {
                question: "What is a man-in-the-middle (MITM) attack?",
                options: ["Intercepting and altering communications between two parties", "Blocking access to a website", "Phishing through emails", "None of the above"],
                correct: 0,
                explanation: "MITM attacks involve intercepting and potentially altering communications between two parties without their knowledge."
            },
            {
                question: "What is the main purpose of encryption?",
                options: ["To make data unreadable to unauthorized users", "To speed up data processing", "To compress files", "To increase storage space"],
                correct: 0,
                explanation: "Encryption ensures data remains confidential."
            }
        ],

        hard: [
            {
                question: "What is a buffer overflow attack?",
                options: ["An attack that exploits a software bug", "An attack that occurs when more data is written to a buffer than it can hold", "An attack that slows down a network", "An attack that steals passwords"],
                correct: 1,
                explanation: "Buffer overflow attacks occur when more data is written to a buffer than it can hold, leading to code execution vulnerabilities."
            },
            {
                question: "What is the principle of defense in depth?",
                options: ["Implementing multiple layers of security controls", "Using only one strong firewall", "Encrypting data", "Having a strong password policy"],
                correct: 0,
                explanation: "Defense in depth involves implementing multiple layers of security controls to protect against different types of threats."
            },
            {
                question: "What is an Advanced Persistent Threat (APT)?",
                options: ["A one-time cyber attack", "An attacker that gains unauthorized access and remains undetected for a long period", "A type of malware", "An email phishing scam"],
                correct: 1,
                explanation: "APTs are long-term targeted attacks where attackers gain unauthorized access and remain undetected for an extended period."
            },
            {
                question: "What is a SQL Injection attack?",
                options: ["An attack that exploits web applications by injecting malicious SQL queries", "A network-based attack", "A phishing attack", "A type of malware"],
                correct: 0,
                explanation: "SQL Injection attacks exploit web applications by injecting malicious SQL queries to manipulate databases."
            },
            {
                question: "What is the purpose of a security information and event management (SIEM) system?",
                options: ["To detect and respond to security incidents", "To improve network speed", "To manage passwords", "To encrypt data"],
                correct: 0,
                explanation: "SIEM systems collect, analyze, and respond to security incidents in real-time."
            },
            {
                question: "What is a rootkit?",
                options: ["A tool used by hackers to gain unauthorized access to a computer system", "A software update", "A network protocol", "An antivirus program"],
                correct: 0,
                explanation: "Rootkits are malicious tools that allow attackers to gain and maintain unauthorized access to a computer system."
            },
            {
                question: "What is the purpose of a security audit?",
                options: ["To review and assess the security of a system", "To install new software", "To create backups", "To speed up a system"],
                correct: 0,
                explanation: "Security audits review and assess the security measures and protocols of a system to ensure compliance and identify vulnerabilities."
            },
            {
                question: "What is data exfiltration?",
                options: ["Unauthorized transfer of data from a system", "Encrypting data", "Deleting data", "Backing up data"],
                correct: 0,
                explanation: "Data exfiltration refers to the unauthorized transfer of data from a system, often carried out by cybercriminals."
            },
            {
                question: "What is the primary goal of a cyber threat intelligence (CTI) program?",
                options: ["To identify, analyze, and mitigate cyber threats", "To create antivirus software", "To improve network speed", "To manage user accounts"],
                correct: 0,
                explanation: "CTI programs aim to identify, analyze, and mitigate cyber threats by gathering and using information about potential attacks."
            },
            {
                question: "What is the purpose of a sandbox in cybersecurity?",
                options: ["To isolate and analyze suspicious files or programs", "To store user data", "To improve network performance", "To encrypt communications"],
                correct: 0,
                explanation: "Sandboxes isolate and analyze suspicious files or programs in a controlled environment to prevent harm to the main system."
            },
            {
                question: "What is a keylogger?",
                options: ["A tool that records keystrokes", "A type of encryption", "A network protocol", "An antivirus software"],
                correct: 0,
                explanation: "Keyloggers are malicious tools that record the keys pressed on a keyboard, often used to capture sensitive information like passwords."
            },
            {
                question: "What is the difference between symmetric and asymmetric encryption?",
                options: ["Symmetric uses the same key for encryption and decryption, asymmetric uses different keys", "Symmetric is faster, asymmetric is slower", "Symmetric is older, asymmetric is newer", "There is no difference"],
                correct: 0,
                explanation: "Symmetric encryption uses the same key for both encryption and decryption, while asymmetric encryption uses a pair of keys (public and private) for encryption and decryption."
            },
            {
                question: "What is a Trojan horse in the context of cybersecurity?",
                options: ["Malicious software disguised as legitimate software", "A type of firewall", "A network attack", "An encryption method"],
                correct: 0,
                explanation: "Trojan horses are malicious software that disguise themselves as legitimate software to deceive users and gain unauthorized access."
            },
            {
                question: "What does 'ethical hacking' refer to?",
                options: ["Hacking performed to identify and fix security vulnerabilities", "Illegal hacking for personal gain", "Social engineering attacks", "Phishing attacks"],
                correct: 0,
                explanation: "Ethical hacking involves authorized hacking activities to identify and fix security vulnerabilities before malicious hackers can exploit them."
            },
            {
                question: "What is the purpose of a penetration testing framework like Metasploit?",
                options: ["To automate and streamline penetration testing activities", "To develop new software", "To manage user accounts", "To encrypt communications"],
                correct: 0,
                explanation: "Penetration testing frameworks like Metasploit help automate and streamline penetration testing activities, making it easier to identify and exploit vulnerabilities."
            },
            {
                question: "What is the significance of a digital certificate in secure communications?",
                options: ["To verify the identity of the communicating parties and enable secure communication", "To improve network speed", "To store user data", "To create backups"],
                correct: 0,
                explanation: "Digital certificates verify the identity of the communicating parties and enable secure communication by encrypting data."
            }
        ],
    hacker: [
        {
            question: "What is the main advantage of using elliptic curve cryptography (ECC) over RSA?",
            options: ["Smaller key sizes for the same level of security", "Faster encryption and decryption speeds", "Easier implementation in software", "Better resistance to physical attacks"],
            correct: 0,
            explanation: "Elliptic curve cryptography (ECC) provides the same level of security as RSA but with much smaller key sizes, which results in improved performance and reduced computational load."
        },
        {
            question: "What is the purpose of a side-channel attack?",
            options: ["To gather information from the physical implementation of a cryptosystem", "To exploit software vulnerabilities", "To perform social engineering attacks", "To inject malicious code into applications"],
            correct: 0,
            explanation: "Side-channel attacks aim to gather information from the physical implementation of a cryptosystem, such as power consumption, electromagnetic leaks, or timing information, to uncover sensitive data like cryptographic keys."
        },
        {
            question: "Which advanced attack technique involves intercepting and altering data traveling between a hardware device and its intended recipient?",
            options: ["Hardware Trojans", "Clock glitching", "Man-in-the-Middle (MITM) attack", "Bus snooping"],
            correct: 3,
            explanation: "Bus snooping involves intercepting and potentially altering data traveling between a hardware device and its intended recipient, often used to extract sensitive information or inject malicious data."
        },
        {
            question: "What is the significance of the Meltdown and Spectre vulnerabilities?",
            options: ["They exploit critical vulnerabilities in modern processors to steal sensitive data", "They are related to cryptographic flaws in SSL/TLS protocols", "They involve ransomware attacks targeting financial institutions", "They are zero-day vulnerabilities in popular web browsers"],
            correct: 0,
            explanation: "Meltdown and Spectre are significant because they exploit critical vulnerabilities in modern processors, allowing attackers to access sensitive data stored in memory, such as passwords and encryption keys."
        },
        {
            question: "What is the primary goal of a Rowhammer attack?",
            options: ["To exploit a hardware vulnerability by repeatedly accessing a row of memory to induce bit flips in adjacent rows", "To perform a SQL injection attack on a database", "To conduct a brute force attack on user passwords", "To deploy ransomware on a target system"],
            correct: 0,
            explanation: "Rowhammer attacks exploit a hardware vulnerability in DRAM memory by repeatedly accessing (hammering) a row of memory cells, causing bit flips in adjacent rows and potentially leading to unauthorized access or data corruption."
        },
        {
            question: "What is a 'Cold Boot Attack' in the context of cybersecurity?",
            options: ["An attack that retrieves encryption keys from a system's memory after a reboot", "An attack that slows down a network", "An attack that exploits web application vulnerabilities", "An attack that involves social engineering techniques"],
            correct: 0,
            explanation: "Cold Boot Attacks involve retrieving encryption keys from a system's memory after a reboot, exploiting the residual data that remains in memory for a short period."
        },
        {
            question: "What is the main objective of an 'Evil Maid Attack'?",
            options: ["To gain unauthorized access to an unattended device by manipulating hardware or software", "To intercept communications between two parties", "To launch a DDoS attack", "To steal credentials through phishing"],
            correct: 0,
            explanation: "Evil Maid Attacks target unattended devices, manipulating hardware or software to gain unauthorized access or install malware."
        },
        {
            question: "What is 'Rubber Hose Cryptanalysis'?",
            options: ["A euphemism for extracting cryptographic secrets by coercion or physical threat", "A technique to break encryption using algorithms", "A method of social engineering", "A network-based attack on cryptographic systems"],
            correct: 0,
            explanation: "Rubber Hose Cryptanalysis refers to extracting cryptographic secrets by coercion or physical threat, rather than through technical means."
        },
        {
            question: "What is 'Steganography' in the context of cybersecurity?",
            options: ["The practice of hiding information within other non-secret data or media", "A method of encrypting data", "A type of malware that hides itself", "A technique for creating secure passwords"],
            correct: 0,
            explanation: "Steganography involves hiding information within other non-secret data or media, such as images or audio files, to conceal the existence of the hidden data."
        },
        {
            question: "What is a 'Reverse Shell' in cybersecurity?",
            options: ["A type of remote access where the target machine connects back to the attacker's machine", "A shell used for command-line interface on Unix systems", "A method of decrypting encrypted data", "A security feature to protect against malware"],
            correct: 0,
            explanation: "A Reverse Shell allows an attacker to remotely access and control a target machine by having the target machine connect back to the attacker's machine."
        },
        {
            question: "What is the goal of a 'Timing Attack'?",
            options: ["To exploit the time taken to execute cryptographic algorithms to extract secret information", "To perform a brute-force attack within a specific time frame", "To disrupt network services", "To steal user credentials through phishing"],
            correct: 0,
            explanation: "Timing Attacks exploit the time taken to execute cryptographic algorithms, using variations in execution time to extract secret information such as cryptographic keys."
        },
        {
            question: "What is 'Bluejacking'?",
            options: ["Sending unsolicited messages over Bluetooth to Bluetooth-enabled devices", "A type of phishing attack over email", "A method of encrypting data", "A technique to break wireless network encryption"],
            correct: 0,
            explanation: "Bluejacking involves sending unsolicited messages over Bluetooth to Bluetooth-enabled devices, typically for advertising or pranking purposes."
        },
        {
            question: "What does 'DNS Tunneling' entail?",
            options: ["Using DNS requests and responses to bypass network security controls and exfiltrate data", "A method of securing DNS communications", "An attack that floods DNS servers with traffic", "A technique to encrypt DNS queries"],
            correct: 0,
            explanation: "DNS Tunneling involves using DNS requests and responses to bypass network security controls and exfiltrate data, often used for covert data transmission."
        },
        {
            question: "What is the significance of 'Heap Spraying' in exploiting vulnerabilities?",
            options: ["It involves filling the heap memory with a payload to facilitate reliable code execution when a vulnerability is triggered", "It is a method of encrypting data in memory", "It is a type of denial-of-service attack", "It is a technique to secure data storage"],
            correct: 0,
            explanation: "Heap Spraying involves filling the heap memory with a payload to facilitate reliable code execution when a vulnerability is triggered, making it easier for an attacker to exploit memory corruption bugs."
        },
        {
            question: "What is the primary goal of 'Integer Overflow' attacks?",
            options: ["To cause unexpected behavior by exceeding the maximum value an integer can hold", "To encrypt data", "To perform a brute-force attack", "To steal credentials through phishing"],
            correct: 0,
            explanation: "Integer Overflow attacks cause unexpected behavior by exceeding the maximum value an integer can hold, potentially leading to vulnerabilities such as buffer overflows and arbitrary code execution."
        },
    ],
};

export default questionsData;
