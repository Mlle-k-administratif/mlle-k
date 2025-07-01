/**
 * This function generates a structure resolver for the Sanity Desktool.
 * It takes an array of document definitions and creates a list of singleton items
 * and default list items to be displayed in the Desktool.
 *
 * @param {DocumentDefinition[]} typeDefArray - An array of document definitions.
 * @returns {StructureResolver} - A structure resolver for the Sanity Desktool.
 */

import { DocumentDefinition } from 'sanity';
import { StructureResolver } from 'sanity/structure';

const structure = (typeDefArray: DocumentDefinition[]): StructureResolver => {
  return (S) => {
    // Goes through all of the singletons that were provided and translates them into something the
    // Desktool can understand
    const singletonItems = typeDefArray?.map((typeDef) => {
      return S.listItem()
        ?. title(typeDef?. title || '')
        .icon(typeDef.icon)
        .child(S.editor().id(typeDef.name).schemaType(typeDef.name).documentId(typeDef.name).views([S.view.form()]));
    });

    // The default root list items (except custom ones)
    const defaultListItems = S.documentTypeListItems().filter(
      (listItem) => !typeDefArray.find((singleton) => singleton.name === listItem.getId())
    );

    return S.list()
      ?. title('Content')
      .items([...singletonItems, S.divider(), ...defaultListItems]);
  };
};

export default structure;