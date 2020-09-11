import { Routes } from 'src/constants/routes';
import { CharacterSheetPage } from './CharacterSheetPage';
import { EquipmentPage } from './EquipmentPage';
import { DashboardPage } from './DashboardPage';
import { RulesOverviewPage } from './RulesOverviewPage';
import { NotFoundPage } from './NotFoundPage';

export interface Page {
  name: string, 
  route: Routes,
  component: any,
}

const catchAllRoute =   {
  name: 'Nothing Here',
  route: Routes.catchAll,
  component: NotFoundPage,
}

export const navigationPages: Page[] = [
  {
    name: 'Character Sheet',
    route: Routes.characterSheet,
    component: CharacterSheetPage,
  },
  {
    name: 'Equipment',
    route: Routes.equipment,
    component: EquipmentPage,
  },
  {
    name: 'Dashboard',
    route: Routes.dashboard,
    component: DashboardPage,
  },
  {
    name: 'Rules Overview',
    route: Routes.rulesOverview,
    component: RulesOverviewPage,
  },
]

export const allPages: Page[] = [ ...navigationPages, catchAllRoute];