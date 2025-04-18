
import React from 'react';
import { Award, ExternalLink, FileCode } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Certification {
  title: string;
  issuedBy: string;
  issueDate: string;
  expiryDate: string;
  validationNumber: string;
  icon: React.ReactNode;
  verificationLink: string;
}

const CertificationsSection = () => {
  const certifications: Certification[] = [
    {
      title: 'AWS Certified Solutions Architect - Associate',
      issuedBy: 'Amazon Web Services',
      issueDate: 'Sep 09, 2023',
      expiryDate: 'Sep 09, 2026',
      validationNumber: '6PH5PJ2C7JQEQQGQ',
      icon: <Award size={24} className="text-devops-accent" />,
      verificationLink: 'https://aws.amazon.com/verification'
    },
    {
      title: 'AWS Certified Cloud Practitioner',
      issuedBy: 'Amazon Web Services',
      issueDate: 'Jan 09, 2023',
      expiryDate: 'Sep 09, 2026',
      validationNumber: '7K0JKHZ15MREQH9G',
      icon: <Award size={24} className="text-devops-accent" />,
      verificationLink: 'https://aws.amazon.com/verification'
    },
    {
      title: 'AWS Certified Developer - Associate',
      issuedBy: 'Amazon Web Services',
      issueDate: 'Jan 03, 2023',
      expiryDate: 'Jan 03, 2026',
      validationNumber: 'SHFN8ZJKYJR4Q2WV',
      icon: <Award size={24} className="text-devops-accent" />,
      verificationLink: 'https://aws.amazon.com/verification'
    },
    {
      title: 'Docker for the Absolute Beginner',
      issuedBy: 'KodeKloud via Udemy',
      issueDate: 'Jul 19, 2024',
      expiryDate: 'N/A',
      validationNumber: '2DF185F10AE9-2DFABDBFC3D0-2DF17FBDFA41',
      icon: <FileCode size={24} className="text-devops-accent" />,
      verificationLink: 'https://learn.kodekloud.com/certificate/2DF185F10AE9-2DFABDBFC3D0-2DF17FBDFA41'
    }
  ];

  return (
    <section id="certifications" className="py-16 bg-devops-background dark:bg-devops-background-dark">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Certifications</h2>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white dark:bg-devops-dark rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-1 bg-gradient-to-r from-devops-accent to-blue-600">
                {/* Empty div for gradient border */}
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {cert.icon}
                  <h3 className="font-bold text-xl text-devops-navy dark:text-devops-navy-dark ml-2">{cert.title}</h3>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                    <span className="font-medium">Issued by:</span> {cert.issuedBy}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                    <span className="font-medium">Issue Date:</span> {cert.issueDate}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    <span className="font-medium">Expiry Date:</span> {cert.expiryDate}
                  </p>
                </div>
                
                <div className="mb-4">
                  <Badge variant="outline" className="bg-blue-50 border-blue-200 text-blue-800 font-medium dark:bg-blue-900 dark:border-blue-800 dark:text-blue-100">
                    Validation: {cert.validationNumber}
                  </Badge>
                </div>
                
                <a 
                  href={cert.verificationLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-devops-accent hover:underline inline-flex items-center gap-1"
                >
                  Verify <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
