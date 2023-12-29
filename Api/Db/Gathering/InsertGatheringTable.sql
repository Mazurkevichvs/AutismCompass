WITH inserted_address AS (
    INSERT INTO address (city, street, house, apartment)
        VALUES ('Gdansk', 'Targ Sienny', 7, 2)
        RETURNING address_id)

INSERT
INTO gathering (address_id, name, type, date, description, short_description, img_link)  
SELECT address_id,
       'Spektakl włączający zmysły: Mała Syrenka Disneya, Musical',
       0,
       '2023-02-10T12:00:00.385'::timestamp,
       'Przedstawienie zmysłów ma na celu stworzenie przyjaznego środowiska dla osób ze spektrum autyzmu i innych z wrażliwościami. Zmniejszono poziom dźwięku, wyeliminowano migające światła i efekty specjalne. Utworzono Cichy Pokój z wsparciem wolontariuszy. Inspiracją jest \"Mała Syrenka Disneya\" z muzyką Alana Menkena. Opowieść o Ariel, córce króla Trytona, pragnącej być z ludzkim księciem, z rybą Flądrą, mewą Scuttle i krabem Sebastianem. Po przedstawieniu organizowane są darmowe zajęcia artystyczne przez Young at Art Museum, a po koncercie można spotkać się z bohaterami.',
       'Przedstawienie zmysłów ma na celu stworzenie przyjaznego środowiska dla osób ze spektrum autyzmu i innych z wrażliwościami. Zmniejszono poziom dźwięku, wyeliminowano migające światła i efekty...',
       'event1.png'
FROM inserted_address;

WITH inserted_address AS (
    INSERT INTO address (link)
        VALUES ('https://www.eventbrite.com/e/promoting-independence-living-and-transportation-tickets-694233469997?aff=oddtdtcreator')
        RETURNING address_id)

INSERT
INTO gathering (address_id, name, type, date, description, short_description, img_link)
SELECT address_id,
       'Promowanie Niezależności: Życie i Transport',
       1,
       '2023-02-14T18:00:00.385'::timestamp,
       'Dowiedz się więcej na temat: Kroków do podjęcia teraz, aby wspierać niezależne życie w przyszłości Programów dostępnych w społeczności wspierających niezależne życie Źródeł finansowania promujących niezależne życie Planowania transportu Kroków do promowania indywidualnego bezpieczeństwa.',
       'Dołącz do wydarzenia \"Promowanie Niezależności: Życie i Transport\". Dowiedz się, jakie kroki podjąć już teraz, aby wspierać niezależne życie w przyszłości Programów dostępnych w społeczności...',
       'event2.png'
FROM inserted_address;

WITH inserted_address AS (
    INSERT INTO address (city, street, house, apartment)
        VALUES ('Gdynia', 'Stefana Okrzei', 6, 12)
        RETURNING address_id)

INSERT
INTO gathering (address_id, name, type, date, description, short_description, img_link)
SELECT address_id,
       'Wspieranie Funkcji Wykonawczych Uczniów ze Spektrum Autyzmu I',
       0,
       '2023-02-21T9:00:00.385'::timestamp,
       'Pierwsza sesja naukowa będzie poświęcona powszechnym różnicom w funkcjonowaniu wykonawczym u uczniów ze spektrum autyzmu. Zdefiniuj funkcjonowanie wykonawcze i jego znaczenie dla młodzieży z zaburzeniami ze spektrum autyzmu. Poznaj różnice w funkcjonowaniu wykonawczym, które są powszechne u młodzieży ze spektrum autyzmu. Zidentyfikuj różnice w funkcjonowaniu wykonawczym wśród młodzieży ze spektrum autyzmu na podstawie jednego przypadku.',
       'Pierwsza sesja naukowa będzie poświęcona powszechnym różnicom w funkcjonowaniu wykonawczym u uczniów ze spektrum autyzmu. Zdefiniuj funkcjonowanie wykonawcze i jego znaczenie dla młodzieży...',
       'event3.png'
FROM inserted_address;

WITH inserted_address AS (
    INSERT INTO address (city, street, house, apartment)
        VALUES ('Gdynia', 'Stefana Okrzei', 6, 12)
        RETURNING address_id)

INSERT
INTO gathering (address_id, name, type, date, description, short_description, img_link)
SELECT address_id,
       'Wspieranie Funkcji Wykonawczych Autystycznych Uczniów II',
       0,
       '2023-02-23T9:00:00.385'::timestamp,
       'Autystyczni uczniowie mają znacznie większe prawdopodobieństwo doświadczania wyzwań związanych ze zdrowiem psychicznym w porównaniu do uczniów spoza spektrum autyzmu. Te wyzwania obejmują trudności w regulacji emocji, występowanie lęku i depresji, które mogą być nasilane przez sytuacje związane z prześladowaniami, ofiarami przemocy oraz segregacją w szkołach. Istnieje pilna potrzeba wsparcia zdrowia psychicznego i behawioralnego autystycznych uczniów.',
       'Druga sesja naukowa skupi się na podejściach opartych na dowodach, które mogą być wykorzystane do wsparcia funkcji wykonawczych autystycznych uczniów.',
       'event4.png'
FROM inserted_address;

WITH inserted_address AS (
    INSERT INTO address (link)
        VALUES ('https://leadcenter.org/wp-content/uploads/2023/10/CreatingEmploymentOpportunities.pdf')
        RETURNING address_id)

INSERT
INTO gathering (address_id, name, type, date, description, short_description, img_link)
SELECT address_id,
       'Inicjatywa Przyjazne Prace: Zatrudnienie Osób Niepełnosprawnych',
       1,
       '2023-02-25T17:00:00.385'::timestamp,
       'Zapewnimy przegląd Zasad Dobre Prace jako potencjalnego źródła miejsc pracy w konkurencyjnym środowisku dla osób niepełnosprawnych. Wyróżnimy przykłady osób niepełnosprawnych już pracujących w branżach objętych inicjatywą Dobre Prace. Zbadamy strategie, które mogą pomóc pracodawcom korzystać z pracowników niepełnosprawnych w swojej sile roboczej, w tym pracowników z istotnymi niepełnosprawnościami. Przedstawimy liderów biznesu, którzy omówią wkład osób niepełnosprawnych w ich zespole pracowniczym. ',
       'Zapewnimy przegląd Zasad Dobre Prace jako potencjalnego źródła miejsc pracy w konkurencyjnym środowisku dla osób niepełnosprawnych. Wyróżnimy przykłady osób niepełnosprawnych...',
       'event5.png'
FROM inserted_address;

WITH inserted_address AS (
    INSERT INTO address (link)
        VALUES ('https://acl.gov/news-and-events/announcements/webinar-series-recognize-50-years-rehab-act')
        RETURNING address_id)
INSERT
INTO gathering (address_id, name, type, date, description, short_description, img_link)
SELECT address_id,
       'Seria webinariów dla upamiętnienia 50-lecia ustawy Rehab I',
       1,
       '2023-02-28T18:00:00.385'::timestamp,
       'Kluczowi liderzy zaangażowani w uchwalenie i początkową implementację ustawy podzielą się swoimi osobistymi historiami i spostrzeżeniami. Od działań lobbingowych, które przyczyniły się do jej uchwalenia, po wpływ prawa na społeczność osób niepełnosprawnych i szersze społeczeństwo, w tej 90-minutowej dyskusji panelowej omówione zostaną bariery, sukcesy i nauki, aby pomóc w kształtowaniu przyszłej współpracy i budowania koalicji.',
       'Kluczowi liderzy zaangażowani w uchwalenie i początkową implementację ustawy podzielą się swoimi osobistymi historiami i spostrzeżeniami. Od działań lobbingowych, które przyczyniły się do jej uchwalenia...',
       'event6.png'
FROM inserted_address;

WITH inserted_address AS (
    INSERT INTO address (link)
        VALUES ('https://acl.gov/news-and-events/announcements/webinar-addressing-sexual-assault-against-people-disabilities')
        RETURNING address_id)

INSERT
INTO gathering (address_id, name, type, date, description, short_description, img_link)
SELECT address_id,
       'Przeciwdziałania Przemocy Seksualnej Wobec Osób z Niepełnosprawnościami',
       1,
       '2023-03-06T19:00:00.385'::timestamp,
       'Webinarium skupi się na problemie występowania przemocy seksualnej w społeczności osób z niepełnosprawnościami. Obejmie perspektywy osób z niepełnosprawnościami intelektualnymi i/lub rozwojowymi, które podzielą się swoimi doświadczeniami, bariery, jakie napotkały w poszukiwaniu wsparcia, oraz zalecenia mające na celu poprawę dostępu do opieki i sprawiedliwości. Grupa docelowa jest szeroka i obejmuje organizacje obsługujące osoby z niepełnosprawnościami intelektualnymi i/lub rozwojowymi, organizacje obsługujące ofiary przemocy seksualnej, a także obrońców praw ofiar i specjalistów ds. zapobiegania.',
       'Webinarium skupi się na problemie występowania przemocy seksualnej w społeczności osób z niepełnosprawnościami.',
       'event7.png'
FROM inserted_address;

WITH inserted_address AS (
    INSERT INTO address (city, street, house, apartment)
        VALUES ('Sopot', 'Aleja Niepodległości', 817, 1)
        RETURNING address_id)

INSERT
INTO gathering (address_id, name, type, date, description, short_description, img_link)
SELECT address_id,
       'Eksploracja Mózgu: Eksperci Dzielą Się Spostrzeżeniami',
       0,
       '2023-03-12T18:00:00.385'::timestamp,
       'Według najnowszych statystyk Centrum Kontroli i Zapobiegania Chorobom, jedna na 36 osób otrzymuje diagnozę zaburzeń ze spektrum autyzmu. Obecnie bardziej niż kiedykolwiek istotne jest zrozumienie tego stanu, jego wpływu na społeczność oraz jak lepiej wspierać osoby dotknięte tym schorzeniem.',
       'Według najnowszych statystyk Centrum Kontroli i Zapobiegania Chorobom, jedna na 36 osób otrzymuje diagnozę zaburzeń ze spektrum autyzmu. Obecnie bardziej niż kiedykolwiek istotne jest zrozumienie tego stanu...',
       'event8.png'
FROM inserted_address;
WITH inserted_address AS (
    INSERT INTO address (link)
        VALUES ('https://www.kennedykrieger.org/community/initiatives/neurodiversity-at-work-at-kennedy-krieger')
        RETURNING address_id)

INSERT
INTO gathering (address_id, name, type, date, description, short_description, img_link)
SELECT address_id,
       'Neurodywersyfikacja w Pracy',
       1,
       '2023-04-05T17:30:00.385'::timestamp,
       'Neurodywersyfikacja definiowana jest jako szeroki zakres różnic neurologicznych, które obdarzają jednostkę unikalnymi umiejętnościami, zdolnościami i perspektywami. Akceptowanie i szacunek dla takich różnic wspiera równość, różnorodność i włączenie w miejscu pracy, w domu i społeczności.',
       'Neurodywersyfikacja definiowana jest jako szeroki zakres różnic neurologicznych, które obdarzają jednostkę unikalnymi umiejętnościami, zdolnościami i perspektywami. Akceptowanie i szacunek dla takich różnic...',
       'event9.png'
FROM inserted_address;