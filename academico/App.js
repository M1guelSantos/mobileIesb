import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import AlunoStack from './screen/alunos/AlunoStack';
import CursoStack from './screen/cursos/CursosStack';
import DisciplinasStack from './screen/disciplinas/DisciplinasStack';
import ProfessoresStack from './screen/professores/ProfessoresStack';
import TurmasStack from './screen/turmas/TurmasStack';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name='alunos'
              component={AlunoStack}
              options={{
                tabBarLabel: 'alunos',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="account" color={color} size={26} />
                ),
              }}
            />

            <Tab.Screen
              name='cursos'
              component={CursoStack}
              options={{
                tabBarLabel: 'cursos',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="bookshelf" color={color} size={26} />
                  
                ),
              }}
            />

            <Tab.Screen
              name='disciplinas'
              component={DisciplinasStack}
              options={{
                tabBarLabel: 'disciplinas',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="notebook-check" color={color} size={26} />
                ),
              }}
            />

            <Tab.Screen
              name='professores'
              component={ProfessoresStack}
              options={{
                tabBarLabel: 'professores',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="account-group-outline" color={color} size={26} />
                ),
              }}
            />

            <Tab.Screen
              name='turmas'
              component={TurmasStack}
              options={{
                tabBarLabel: 'turmas',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="google-classroom" color={color} size={26} />
                ),
              }}
            />

          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}
