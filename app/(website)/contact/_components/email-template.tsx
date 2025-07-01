import * as React from "react";
import { Html, Head, Preview, Section, Text, Container } from "@react-email/components";

type Props = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export function ContactEmailTemplate({ name, email, phone, message }: Props) {
  return (
    <Html>
      <Head />
      <Preview>Nouvelle demande de contact de {name} 🚀</Preview>
      <Section style={{ background: '#FFD600', padding: '24px 0 8px 0', textAlign: 'center' }}>
        <Text style={{ fontSize: 28, fontWeight: 800, color: '#222', margin: 0, letterSpacing: 1 }}>MlleK</Text>
        <Text style={{ fontSize: 16, color: '#444', margin: 0, fontWeight: 500 }}>Nouveau message reçu de {name}</Text>
      </Section>
      <Section style={{ background: '#f5f5f5', padding: '32px 0', minHeight: 400 }}>
        <Container style={{ background: '#fff', borderRadius: 12, padding: 32, maxWidth: 480, boxShadow: '0 4px 24px #0001', margin: '0 auto' }}>
          <Text style={{ fontSize: 22, fontWeight: 700, color: '#FFD600', marginBottom: 18, textAlign: 'center', letterSpacing: 0.5 }}>
            📬 Nouveau message reçu !
          </Text>
          <Section style={{ marginBottom: 18 }}>
            <Text style={{ fontSize: 16, color: '#222', margin: '8px 0' }}><b>Nom :</b> {name}</Text>
            <Text style={{ fontSize: 16, color: '#222', margin: '8px 0' }}><b>Email :</b> {email}</Text>
            {phone && <Text style={{ fontSize: 16, color: '#222', margin: '8px 0' }}><b>Téléphone :</b> {phone}</Text>}
          </Section>
          <Section style={{ background: '#FFF9C4', borderRadius: 8, padding: 18, marginBottom: 24, border: '1px solid #FFD600' }}>
            <Text style={{ fontSize: 16, color: '#444', fontStyle: 'italic', margin: 0 }}>
              {message}
            </Text>
          </Section>
          <Section style={{ textAlign: 'center', margin: '24px 0' }}>
            <a
              href={`mailto:${email}`}
              style={{
                display: 'inline-block',
                background: '#FFD600',
                color: '#222',
                fontWeight: 700,
                fontSize: 16,
                padding: '12px 32px',
                borderRadius: 8,
                textDecoration: 'none',
                boxShadow: '0 2px 8px #0001',
                border: '1px solid #FFD600',
                transition: 'background 0.2s',
              }}
            >
              Répondre
            </a>
          </Section>
          <Section style={{ textAlign: 'center', marginTop: 24 }}>
            <Text style={{ fontSize: 14, color: '#888' }}>
              Merci de faire confiance à <b>MlleK</b>.<br />Vous pouvez répondre directement à cet email pour contacter l'expéditeur.
            </Text>
          </Section>
        </Container>
      </Section>
      <Section style={{ textAlign: 'center', padding: '0 0 24px 0' }}>
        <Text style={{ fontSize: 12, color: '#bbb' }}>© {new Date().getFullYear()} MlleK. Tous droits réservés.</Text>
      </Section>
    </Html>
  );
} 