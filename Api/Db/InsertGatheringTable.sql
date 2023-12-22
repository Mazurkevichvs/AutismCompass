WITH inserted_address AS (
    INSERT INTO address (city, street, house, apartment)
        VALUES ('Gdansk', 'Targ Sienny', 7, 2)
        RETURNING address_id)

INSERT
INTO gathering (address_id, name, type, date, description, short_description)
SELECT address_id,
       'Spektakl włączający zmysły: Mała Syrenka Disneya, Musical',
       0,
       '2023-02-10T12:00:00.385'::timestamp,
       'Celem tego przedstawienia włączającego zmysły jest stworzenie przyjaznego i wspierającego środowiska dla dzieci i dorosłych ze spektrum autyzmu, a także osób z innymi problemami związanymi z wrażliwością lub niepełnosprawnością rozwojową. Aby stworzyć scenerię włączającą zmysły, w produkcji wprowadzono niewielkie zmiany, obejmujące zmniejszony poziom dźwięku, brak migających i stroboskopowych świateł oraz minimalne efekty specjalne. Teren przylegający do teatru został wyznaczony jako Cichy Pokój, w którym pracują specjalnie przeszkoleni wolontariusze, którzy zapewniają wsparcie publiczności. Oparta na jednej z najbardziej ukochanych historii Hansa Christiana Andersena i klasycznym filmie animowanym, Mała Syrenka Disneya to zniewalająco piękna historia miłosna na wieki. Muzyka skomponowana przez ośmiokrotnego zdobywcę Oscara Alana Menkena, teksty autorstwa Howarda Ashmana i Glenna Slatera oraz fascynująca książka Douga Wrighta sprawiają, że ta podejrzana baśń podbije Twoje serce nieodpartymi piosenkami, takimi jak „Under the Sea”, „Kiss the Woman” i „Part Of your world”. Ariel, najmłodsza córka króla Trytona, pragnie ścigać ludzkiego księcia Eryka w świecie powyżej, targując się ze złą morską wiedźmą Ursulą, by zamieniła swój ogon na nogi. Ale okazja nie jest taka, jak się wydaje, a Ariel potrzebuje pomocy swoich kolorowych przyjaciół, ryby Flądra, mewy Scuttle i kraba Sebastiana, aby przywrócić porządek w morzu. Skorzystaj z bezpłatnych zajęć artystycznych i rzemieślniczych organizowanych przed pokazem przez Young at Art Museum! Dołącz do nas po koncercie i spotkaj się z bohaterami!',
       'Celem tego przedstawienia włączającego zmysły jest stworzenie przyjaznego i wspierającego środowiska dla dzieci i dorosłych ze spektrum autyzmu, a także osób z innymi problemami związanymi z wrażliwością lub niepełnosprawnością rozwojową.'
FROM inserted_address;

WITH inserted_address AS (
    INSERT INTO address (link)
        VALUES ('https://www.eventbrite.com/e/promoting-independence-living-and-transportation-tickets-694233469997?aff=oddtdtcreator')
        RETURNING address_id)

INSERT
INTO gathering (address_id, name, type, date, description, short_description)
SELECT address_id,
       'Promowanie Niezależności: Życie i Transport',
       1,
       '2023-02-14T18:00:00.385'::timestamp,
       'Dowiedz się więcej na temat: Kroków do podjęcia teraz, aby wspierać niezależne życie w przyszłości Programów dostępnych w społeczności wspierających niezależne życie Źródeł finansowania promujących niezależne życie Planowania transportu Kroków do promowania indywidualnego bezpieczeństwa.',
       'Dołącz do wydarzenia "Promowanie Niezależności: Życie i Transport". Dowiedz się, jakie kroki podjąć już teraz, aby wspierać niezależne życie w przyszłości'
FROM inserted_address;

WITH inserted_address AS (
    INSERT INTO address (city, street, house, apartment)
        VALUES ('Gdynia', 'Stefana Okrzei', 6, 12)
        RETURNING address_id)

INSERT
INTO gathering (address_id, name, type, date, description, short_description)
SELECT address_id,
       'Wspieranie Funkcji Wykonawczych Uczniów ze Spektrum Autyzmu w Klasie: Odpowiedzi na Pytania, Część I',
       0,
       '2023-02-21T9:00:00.385'::timestamp,
       'Pierwsza sesja naukowa będzie poświęcona powszechnym różnicom w funkcjonowaniu wykonawczym u uczniów ze spektrum autyzmu. Zdefiniuj funkcjonowanie wykonawcze i jego znaczenie dla młodzieży z zaburzeniami ze spektrum autyzmu. Poznaj różnice w funkcjonowaniu wykonawczym, które są powszechne u młodzieży ze spektrum autyzmu. Zidentyfikuj różnice w funkcjonowaniu wykonawczym wśród młodzieży ze spektrum autyzmu na podstawie jednego przypadku.',
       'Celem tej dwuczłonowej serii jest rozwinięcie treści dydaktycznych omawianych podczas wcześniejszych sesji dotyczących funkcji wykonawczych [Część 1, Część 2] i zapewnienie dodatkowej okazji do omówienia przykładu przypadku, uczestnictwa w dyskusji oraz dostatecznego czasu na pytania i odpowiedzi.'
FROM inserted_address;

WITH inserted_address AS (
    INSERT INTO address (city, street, house, apartment)
        VALUES ('Gdynia', 'Stefana Okrzei', 6, 12)
        RETURNING address_id)

INSERT
INTO gathering (address_id, name, type, date, description, short_description)
SELECT address_id,
       'Wspieranie Funkcji Wykonawczych Autystycznych Uczniów w Klasie: Odpowiedzi na Pytania, Część II',
       0,
       '2023-02-23T9:00:00.385'::timestamp,
       'Autystyczni uczniowie mają znacznie większe prawdopodobieństwo doświadczania wyzwań związanych ze zdrowiem psychicznym w porównaniu do uczniów spoza spektrum autyzmu. Te wyzwania obejmują trudności w regulacji emocji, występowanie lęku i depresji, które mogą być nasilane przez sytuacje związane z prześladowaniami, ofiarami przemocy oraz segregacją w szkołach. Istnieje pilna potrzeba wsparcia zdrowia psychicznego i behawioralnego autystycznych uczniów.',
       'Druga sesja naukowa skupi się na podejściach opartych na dowodach, które mogą być wykorzystane do wsparcia funkcji wykonawczych autystycznych uczniów.'
FROM inserted_address;

WITH inserted_address AS (
    INSERT INTO address (link)
        VALUES ('https://leadcenter.org/wp-content/uploads/2023/10/CreatingEmploymentOpportunities.pdf')
        RETURNING address_id)

INSERT
INTO gathering (address_id, name, type, date, description, short_description)
SELECT address_id,
       'Inicjatywa Przyjazne Prace: Tworzenie Oportunite dla Zatrudnienia Osób Niepełnosprawnych',
       1,
       '2023-02-25T17:00:00.385'::timestamp,
       'Zapewnimy przegląd Zasad Dobre Prace jako potencjalnego źródła miejsc pracy w konkurencyjnym środowisku dla osób niepełnosprawnych. Wyróżnimy przykłady osób niepełnosprawnych już pracujących w branżach objętych inicjatywą Dobre Prace. Zbadamy strategie, które mogą pomóc pracodawcom korzystać z pracowników niepełnosprawnych w swojej sile roboczej, w tym pracowników z istotnymi niepełnosprawnościami. Przedstawimy liderów biznesu, którzy omówią wkład osób niepełnosprawnych w ich zespole pracowniczym. ',
       'W tym webinarium prelegenci podzielą się strategiami wspierającymi przedsiębiorstwo i pracowników, mając na celu zapewnienie wspólnego sukcesu, promowanie retencji oraz tworzenie możliwości awansu.'
FROM inserted_address;

WITH inserted_address AS (
    INSERT INTO address (link)
        VALUES ('https://acl.gov/news-and-events/announcements/webinar-series-recognize-50-years-rehab-act')
        RETURNING address_id)
INSERT
INTO gathering (address_id, name, type, date, description, short_description)
SELECT address_id,
       'Seria webinariów dla upamiętnienia 50-lecia ustawy Rehab Act Część I',
       1,
       '2023-02-28T18:00:00.385'::timestamp,
       'Kluczowi liderzy zaangażowani w uchwalenie i początkową implementację ustawy podzielą się swoimi osobistymi historiami i spostrzeżeniami. Od działań lobbingowych, które przyczyniły się do jej uchwalenia, po wpływ prawa na społeczność osób niepełnosprawnych i szersze społeczeństwo, w tej 90-minutowej dyskusji panelowej omówione zostaną bariery, sukcesy i nauki, aby pomóc w kształtowaniu przyszłej współpracy i budowania koalicji.',
       'Na spotakniu będą omówione bariery, sukcesy i nauki, aby pomóc w kształtowaniu przyszłej współpracy i budowania koalicji.'
FROM inserted_address;

WITH inserted_address AS (
    INSERT INTO address (link)
        VALUES ('https://acl.gov/news-and-events/announcements/webinar-addressing-sexual-assault-against-people-disabilities')
        RETURNING address_id)

INSERT
INTO gathering (address_id, name, type, date, description, short_description)
SELECT address_id,
       'Webinar na temat Przeciwdziałania Przemocy Seksualnej Wobec Osób z Niepełnosprawnościami',
       1,
       '2023-03-06T19:00:00.385'::timestamp,
       'Webinarium skupi się na problemie występowania przemocy seksualnej w społeczności osób z niepełnosprawnościami. Obejmie perspektywy osób z niepełnosprawnościami intelektualnymi i/lub rozwojowymi, które podzielą się swoimi doświadczeniami, bariery, jakie napotkały w poszukiwaniu wsparcia, oraz zalecenia mające na celu poprawę dostępu do opieki i sprawiedliwości. Grupa docelowa jest szeroka i obejmuje organizacje obsługujące osoby z niepełnosprawnościami intelektualnymi i/lub rozwojowymi, organizacje obsługujące ofiary przemocy seksualnej, a także obrońców praw ofiar i specjalistów ds. zapobiegania.',
       'Webinarium skupi się na problemie występowania przemocy seksualnej w społeczności osób z niepełnosprawnościami.'
FROM inserted_address;

WITH inserted_address AS (
    INSERT INTO address (city, street, house, apartment)
        VALUES ('Sopot', 'Aleja Niepodległości', 817, 1)
        RETURNING address_id)

INSERT
INTO gathering (address_id, name, type, date, description, short_description)
SELECT address_id,
       'Eksploracja Mózgu: Eksperci ds. Autyzmu Dzielą Się Swoimi Spostrzeżeniami',
       0,
       '2023-03-12T18:00:00.385'::timestamp,
       'Według najnowszych statystyk Centrum Kontroli i Zapobiegania Chorobom, jedna na 36 osób otrzymuje diagnozę zaburzeń ze spektrum autyzmu. Obecnie bardziej niż kiedykolwiek istotne jest zrozumienie tego stanu, jego wpływu na społeczność oraz jak lepiej wspierać osoby dotknięte tym schorzeniem.',
       'Usłyszysz również relację od jednej z rodzin na temat ich doświadczeń i będziesz mieć możliwość zadawania pytań naszym specialistom.'
FROM inserted_address;
WITH inserted_address AS (
    INSERT INTO address (link)
        VALUES ('https://www.kennedykrieger.org/community/initiatives/neurodiversity-at-work-at-kennedy-krieger')
        RETURNING address_id)

INSERT
INTO gathering (address_id, name, type, date, description, short_description)
SELECT address_id,
       'Neurodywersyfikacja w Pracy',
       1,
       '2023-04-05T17:30:00.385'::timestamp,
       'Neurodywersyfikacja definiowana jest jako szeroki zakres różnic neurologicznych, które obdarzają jednostkę unikalnymi umiejętnościami, zdolnościami i perspektywami. Akceptowanie i szacunek dla takich różnic wspiera równość, różnorodność i włączenie w miejscu pracy, w domu i społeczności.',
       'Dowody wskazują, że osoby z różnicami neurologicznymi w miejscu pracy poprawiają kulturę wewnętrzną i zwiększają zaangażowanie pracowników.'
FROM inserted_address;