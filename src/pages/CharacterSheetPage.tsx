import * as React from 'react';
import { CharacterTopInfoLayout } from 'src/components/characterSheet/layouts/CharacterTopInfoLayout';
import { CharacterSpecialtiesLayout } from 'src/components/characterSheet/layouts/CharacterSpecialtiesLayout';
import { CharacterHealthLayout } from 'src/components/characterSheet/layouts/CharacterHealthLayout';
import { CharacterNotesLayout } from 'src/components/characterSheet/layouts/CharacterNotesLayout';
import { CharacterCoinXpLayout } from 'src/components/characterSheet/layouts/CharacterCoinXpLayout';
import { CharacterUnequippedEquipmentLayout } from 'src/components/characterSheet/layouts/CharacterUnequippedEquipmentLayout';

export const CharacterSheetPage = () => {
  return (
    <>
      <CharacterTopInfoLayout />
      <CharacterSpecialtiesLayout />
      <CharacterHealthLayout />
      <CharacterNotesLayout />
      <CharacterCoinXpLayout />
      <CharacterUnequippedEquipmentLayout />
    </>
  );
}