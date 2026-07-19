export type Certificate = {
  title: string;
  issuer: string;
  /** Path relative to /public, e.g. "/certificates/aws-cert.png" */
  image: string;
  date?: string;
};

// Add certificate entries here as files are placed in public/certificates.
// See public/certificates/README.md for instructions.
export const certificates: Certificate[] = [];
