import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography, Container } from '@mui/material';

const SupportTabs: React.FC = () => {
  const [value, setValue] = useState(0);
  const tabStyle = { fontWeight: '600', fontSize:'25px', textTransform: 'none', p:'30px' }
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <section style={{backgroundColor:'#F5EAEB'}}>
        <Container maxWidth="lg">
          <Box
            sx={{
              backgroundColor: '#BDE6D3',
              color: '#00454C',
              borderRadius: '25px',
            }}>
            <Tabs sx={{borderBottom:'1px solid #00454C'}} value={value} onChange={handleChange} indicatorColor="primary">
              <Tab sx={tabStyle} label="Nadmierna Stymulacja Sensoryczna:" />
              <Tab sx={tabStyle} label="Trudności w Komunikacji Społecznej:" />
              <Tab sx={tabStyle} label="Zmiany w Rutynie i Nieprzewidywalność:" />
            </Tabs>
            <Box sx={{p:'50px'}} p={3}>
              {value === 0 && (
                <Box>
                <Typography>
                Nadmierne reakcje na bodźce sensoryczne u osób z ASD związane są z różnorodnymi nieprawidłowościami neurobiologicznymi. Badania neuroobrazowe wykazują, że istnieją zmiany w funkcjonowaniu struktur mózgu, takich jak hipokamp, ciało migdałowate i korowy obszar wzrokowy. Te zmiany mogą wpływać na przetwarzanie sensoryczne i regulację emocji, co z kolei może prowadzić do nadmiernej reaktywności na bodźce zewnętrzne.Rola układu limbicznego, zwłaszcza ciała migdałowatego, jest kluczowa w zrozumieniu nadmiernej stymulacji sensorycznej. Wzmożona aktywacja ciała migdałowatego może powodować nadmierne emocjonalne reakcje na bodźce sensoryczne, co jest szczególnie widoczne w sytuacjach społecznych i nowych środowiskach. 
                </Typography>
                <Typography sx={{mt:'25px'}}>
                Znalezienie skutecznych terapeutycznych podejść do łagodzenia nadmiernej stymulacji sensorycznej u osób z ASD stanowi istotne wyzwanie. Jednym z popularnych podejść jest terapia integracji sensorycznej, która kładzie nacisk na systematyczne wprowadzanie bodźców sensorycznych w kontrolowany sposób, aby dostosować organizm do różnorodnych doznań. Inne podejścia obejmują terapię behawioralną, trening umiejętności społecznych oraz farmakoterapię, która może być stosowana w przypadkach szczególnie trudnych do kontrolowania nadmiernej stymulacji. 
                </Typography>
                </Box>
              )}
              {value === 1 && (
                <Box>
                <Typography>
                Komunikacja społeczna osób z zaburzeniem ze spektrum autyzmu (ASD) często zaskakuje nas swoją unikalnością. Dla niektórych jednostek z autyzmem, gesty i mowa ciała są jak kryptografia społeczna, wymagająca specjalnych umiejętności dekodowania. Niektórzy badacze nazywają to "kodem mowy bez słów", gdzie każde subtelne skinienie głowy czy zmiana tonu głosu stają się znaczącymi elementami tego nietypowego dialektu. Niektóre osoby z autyzmem wykazują niezwykłe zdolności detektywistyczne, porównywane czasem do umiejętności Sherlocka Holmesa. Zamiłowanie do faktów, logiczne myślenie i skoncentrowane spojrzenie na szczegółach sprawiają, że osoby z ASD mogą być mistrzami w rozwiązywaniu zagadek, zarówno tych społecznych, jak i naukowych.
                </Typography>
                <Typography sx={{mt:'25px'}}>
                Dla wielu osób z autyzmem sztuka staje się alternatywnym językiem komunikacji. Ekspresja przez rysunek, malarstwo czy muzykę pozwala im wyrazić to, co czasem trudno ująć w słowa. Działa sztuki stają się unikalnymi manifestacjami ich wewnętrznego świata, który czasami pozostaje nieodgadniony dla osób niezaznajomionych z autyzmem.
                </Typography>
                </Box>
              )}
              {value === 2 && (
                <Box>
                <Typography>
                Dla osób z zaburzeniem ze spektrum autyzmu (ASD), rutyna to nie tylko nawyk, ale wręcz bezpieczna przystań w nieprzewidywalnym oceanie codziennego życia. Badania sugerują, że stałe ramy czasowe i powtarzalne schematy czynności działają jak stabilizator emocjonalny, pomagając osobom z autyzmem lepiej radzić sobie z codziennymi wyzwaniami. Dla wielu osób z ASD, ich świat jest jak skomplikowana konstrukcja z klocków Lego. Zmiany w tej strukturze, nawet najmniejsze, mogą wprowadzić chaos. Właśnie dlatego utrzymanie stałej i przewidywalnej rutyny jest dla nich kluczowe, a wszelkie nieprzewidziane zmiany mogą wywoływać niepokój i stres. Rutyna dla osób z autyzmem nie tylko organizuje czas, ale także wspomaga samoregulację. 
                </Typography>
                <Typography sx={{mt:'25px'}}>
                Przewidywalność otoczenia i działań pomaga im zminimalizować bodźce sensoryczne, które mogą być przytłaczające. W ten sposób, rutyna staje się narzędziem samoopieki, umożliwiając skoncentrowanie uwagi na istotnych dla nich zadaniach. Osoby z autyzmem często wypracowują własne strategie adaptacyjne wobec zmiany rutyny. To mogą być np. specyficzne rytuały, które pomagają im przejść przez nowe sytuacje. Zamiast traktować te strategie jako dziwactwa, warto je postrzegać jako indywidualne techniki radzenia sobie z nieprzewidywalnością.
                </Typography>
                </Box>
              )}
            </Box>
          </Box>
        </Container>
      </section>
    </>
  );
};

export default SupportTabs;
