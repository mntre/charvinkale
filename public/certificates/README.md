# Certificates

Place certificate images (PNG/JPG) or PDFs in this folder — for example:

- `atlassian-cert.png`
- `aws-cert.png`
- `python-cert.png`

Then add a matching entry to the `certificates` array in
`src/data/certificates.ts`:

```ts
{
  title: "AWS Certified Cloud Practitioner",
  issuer: "Amazon Web Services",
  image: "/certificates/aws-cert.png",
  date: "2025",
}
```

The Certificates section on the site renders directly from that array, so
no component changes are needed — just update the data file.
