INSERT INTO result (result_id, score, details, quiz_id)
VALUES (1,10,'Brak cech spektrum autyzmu (0-10 pkt):Na podstawie wyników testu można stwierdzić, że nie wykazujesz istotnych cech spektrum autyzmu.',1),
       (2,20,'Możliwe cechy spektrum autyzmu (11-20 pkt):Wyniki sugerują, że istnieje pewne prawdopodobieństwo obecności cech spektrum autyzmu na niższym stopniu. Zalecamy dalszą obserwację i ewentualne konsultacje z specjalistą.',1),
       (3,35,'Cechy spektrum autyzmu (21-35 pkt):Twój wynik wskazuje na obecność cech spektrum autyzmu. Zalecamy skonsultowanie się z profesjonalistą w celu dokładnej oceny i ewentualnego dalszego postępowania.',1),
       (4,54,'Wyższy stopień cech spektrum autyzmu (35-54 pkt):Twój wynik sugeruje obecność wyższego stopnia cech spektrum autyzmu. Wskazane jest pilne skonsultowanie się z doświadczonym specjalistą celem dalszej diagnostyki i wsparcia.',1);

TRUNCATE TABLE result