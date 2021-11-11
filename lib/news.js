/** Slóð á frétta vefþjónustu */
const NEWS_API = 'https://vef2-2021-ruv-rss-json-proxy.herokuapp.com/';

/**
 * Hlutur sem heldur utan um in-memory „cache“ af gögnum í minni á client (í vafra).
 * Nýtir það að þegar forrit er keyrt mun `fetchNews` fallið *alltaf* keyra þar sem `cache` er í
 * scope, og það verður alltaf sami hluturinn. Við getum því bætt við niðurstöðum í hlutinn með
 * vel þekktum „lykli“ (cache key), við næstu köll getum við athugað hvort hlutur innihaldi þennan
 * lykil og skilað þá þeirri niðurstöðu í stað þess að gera sama kall aftur.
 * 
 * 453 / 5000
* Объект, который поддерживает «кэш» данных в памяти клиента (в браузере).
  * Использует тот факт, что при запуске приложения функция `fetchNews` * всегда * запускается там, где находится` cache`.
  * scope, и это всегда будет одно и то же. Поэтому мы можем добавить результаты к элементу с помощью
  * хорошо известный "ключ кеша", в следующем вызове мы можем проверить, содержит ли элемент этот
  *, а затем вернуть результат вместо того, чтобы делать тот же вызов снова. 
 */
const cache = {};

/**
 * Sækir fréttir frá vefþjónustu. Geymir í in-memory cache gögn eftir `id`.
 * @param {string} [id=''] ID á fréttaflokk til að sækja, sjálgefið tómi (grunn) flokkurinn
 * @returns {Promise<Array<object> | null>} Promise sem verður uppfyllt með fylki af fréttum.
 *           Skilar `null` ef villa kom upp við að sækja gögn.
 * 
 * * Получает новости из веб-сервисов. Хранит данные кеша в памяти по `id`.
  * @param {string} [id = ''] Идентификатор категории новостей для извлечения, категория по умолчанию (основная)
  * @returns {Обещание <Массив <объект> | null>} Обещание, которое будет заполнено матрицей новостей.
  * Возвращает null, если при получении данных произошла ошибка.
 * 
 */
export async function fetchNews(id = '') {
  // TODO útfæra
}
