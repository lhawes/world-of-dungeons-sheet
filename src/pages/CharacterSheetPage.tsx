import * as React from 'react';
import { CharacterTopInfoLayout } from 'src/components/characterSheet/layouts/CharacterTopInfoLayout';
import { CharacterSpecialtiesLayout } from 'src/components/characterSheet/layouts/CharacterSpecialtiesLayout';
import { CharacterHealthLayout } from 'src/components/characterSheet/layouts/CharacterHealthLayout';
import { CharacterNotesLayout } from 'src/components/characterSheet/layouts/CharacterNotesLayout';
import { CharacterCoinXpLayout } from 'src/components/characterSheet/layouts/CharacterCoinXpLayout';
import { CharacterUnequippedEquipmentLayout } from 'src/components/characterSheet/layouts/CharacterUnequippedEquipmentLayout';
import { CharacterEquipmentLayout } from 'src/components/characterSheet/layouts/CharacterEquipmentLayout';

export const CharacterSheetPage = () => {
  return (
    <>
      <CharacterTopInfoLayout />
      <CharacterSpecialtiesLayout />
      <CharacterHealthLayout />
      <CharacterEquipmentLayout />
      <CharacterNotesLayout />
      <CharacterCoinXpLayout />
      <CharacterUnequippedEquipmentLayout />
    </>
  );
}