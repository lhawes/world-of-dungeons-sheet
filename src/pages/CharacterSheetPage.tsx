import * as React from 'react';
import { CharacterTopInfoLayout } from 'src/components/characterSheet/layouts/CharacterTopInfoLayout';
import { CharacterSpecialtiesLayout } from 'src/components/characterSheet/layouts/CharacterSpecialtiesLayout';
import { CharacterHealthLayout } from 'src/components/characterSheet/layouts/CharacterHealthLayout';
import { CharacterNotesLayout } from 'src/components/characterSheet/layouts/CharacterNotesLayout';
import { CharacterCoinXpLayout } from 'src/components/characterSheet/layouts/CharacterCoinXpLayout';
import { CharacterUnequippedEquipmentLayout } from 'src/components/characterSheet/layouts/CharacterUnequippedEquipmentLayout';
import { CharacterEquipmentLayout } from 'src/components/characterSheet/layouts/CharacterEquipmentLayout';
import { BodyContainer } from 'src/components/shared/BodyContainer/BodyContainer';

export const CharacterSheetPage = () => {
  return (
    <BodyContainer title='Character Sheet'>
      <CharacterTopInfoLayout />
      <CharacterSpecialtiesLayout />
      <CharacterHealthLayout />
      <CharacterEquipmentLayout />
      <CharacterNotesLayout />
      <CharacterCoinXpLayout />
      <CharacterUnequippedEquipmentLayout />
    </BodyContainer>
  );
}