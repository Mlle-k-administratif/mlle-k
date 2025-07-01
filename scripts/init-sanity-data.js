import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-05-25',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

async function initSanityData() {
  try {
    console.log('🚀 Initialisation des données Sanity...');

    // Vérifier si le document information existe déjà
    const existingInfo = await client.fetch('*[_type == "information"][0]');
    
    if (!existingInfo) {
      console.log('📝 Création du document information...');
      
      const informationDoc = await client.create({
        _type: 'information',
        contactInfo: {
          email: 'contact@mllek.com',
          phone: '+33 1 23 45 67 89',
          location: 'Paris, France'
        },
        availability: {
          weekdays: 'Lundi - Vendredi: 9h00 - 18h00',
          weekends: 'Samedi - Dimanche: Sur rendez-vous'
        },
        calendlyUrl: 'https://calendly.com/momoseck8/30min'
      });
      
      console.log('✅ Document information créé:', informationDoc._id);
    } else {
      console.log('ℹ️ Document information existe déjà');
    }

    // Vérifier si le document footer existe déjà
    const existingFooter = await client.fetch('*[_type == "footer"][0]');
    
    if (!existingFooter) {
      console.log('📝 Création du document footer...');
      
      const footerDoc = await client.create({
        _type: 'footer',
        about: {
          title: 'MlleK',
          description: 'Votre partenaire de confiance pour la création de sites web et applications sur mesure.'
        },
        socialLinks: {
          facebook: 'https://facebook.com/mllek',
          twitter: 'https://twitter.com/mllek',
          linkedin: 'https://linkedin.com/in/mllek',
          instagram: 'https://instagram.com/mllek'
        },
        legalLinks: []
      });
      
      console.log('✅ Document footer créé:', footerDoc._id);
    } else {
      console.log('ℹ️ Document footer existe déjà');
    }

    console.log('🎉 Initialisation terminée avec succès !');
  } catch (error) {
    console.error('❌ Erreur lors de l\'initialisation:', error);
    process.exit(1);
  }
}

initSanityData(); 