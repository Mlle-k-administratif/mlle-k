import { type SchemaTypeDefinition } from 'sanity';
import { sectionHeadingObject, serviceItemObject, taskItemObject, seoObject } from './object';
import { home, about, service, contact, information, footer } from './singletons';
import { testimonialDocument } from './documents';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Objects
    sectionHeadingObject,
    serviceItemObject,
    taskItemObject,
    seoObject,

    // Documents
    testimonialDocument,

    // Singletons
    home,
    about,
    service,
    contact,
    information,
    footer,
  ],
};
