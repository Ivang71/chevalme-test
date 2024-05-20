import Image from 'next/image'
import styles from '@/app/ui/home.module.css'

export default async function Page() {
    return (
        <main className='container my-20 mx-auto px-4 md:max-w-2xl'>
            <h1 className={`${styles.headline} mb-8 text-5xl font-bold inline-block text-transparent`}>👋, меня зовут Артем</h1>
            <div className='mb-16 mt-4'>
                <div>Я веб-разработчик, которого вдохновляет создание интересных и удобных веб-приложений. Использую свои знания HTML, CSS, JavaScript, React и Next.js для разработки высококачественных и масштабируемых решений. Сотрудничество и постоянное обучение – основа моего подхода, благодаря которому я всегда иду в ногу с динамично развивающимся миром айти.</div>
            </div>

            <span className='text-xl font-bold'>Опыт работы</span>

            <div className={`${styles.boxShadow} mt-4 mb-8 rounded-md p-4`}>
                <div className='flex items-center mb-4'>
                    <Image src='/portfolio/logos/internetweb.svg' alt='Softgamings logo' width={200} height={200} className='w-14 h-14 mr-4 rounded-md bg-gray-50 p-2' />
                    <div className='flex flex-col'>
                        <span className='text-xl font-bold'>Фулстек разработчик</span>
                        <div>InternetWeb - Январь 2023 - по настоящее время</div>
                    </div>
                </div>
                <div>
                    <p className='mb-4'>Разработка и поддержка фронтенда и бекенда сайтов для сайтов на PHP, Vue.js, JQuery, Clickhouse, PostgreSQL, Yii2</p>
                    <p className='mb-4'>Примеры сайтов: <a href='https://juddy.biz/' target='_blank'>juddy.biz</a>, <a href='https://buymedia.biz/en' target='_blank'>buymedia.biz</a>.</p>
                </div>
            </div>

            <div className={`${styles.boxShadow} mt-4 mb-8 rounded-md p-4`}>
                <div className='flex items-center mb-4'>
                    <Image src='/portfolio/logos/softgamings_logo.webp' alt='Softgamings logo' width={200} height={200} className='w-14 h-14 mr-4 rounded-md' />
                    <div className='flex flex-col'>
                        <span className='text-xl font-bold'>Фронтенд разработчик</span>
                        <div>Softgamings - Апрель 2021 - Январь 2023</div>
                    </div>
                </div>
                <div>
                    <p className="mb-4">Использовал Angular для создания интерфейсов для онлайн игровых платформ, таких как BetBRX, <a href='https://play.luckycrypto.com/' target='_blank'>LuckyCrypto</a>, and <a href='https://cats-casino.com/en/home' target='_blank'>CatCasino</a>.</p>
                    <p className="mb-4">Оптимизировал производительность приложения для максимальной скорости и масштабируемости.</p>
                    <p className="mb-4">Сотрудничал с дизайнерами, специалистами по UI/UX и бэкенд-разработчиками.</p>
                    <p className="mb-4">Осуществлял постоянное обслуживание и поддержку существующих веб-сайтов, созданных с помощью Angular и PHP.</p>
                </div>
            </div>

            <div className={`${styles.boxShadow} mb-8 rounded-md p-4`}>
                <div className='flex items-center mb-4'>
                    <Image src='/portfolio/logos/digitalleague_logo.webp' alt='Digital League logo' width={200} height={200} className='w-14 h-14 mr-4 rounded-md' />
                    <div className='flex flex-col'>
                        <span className='text-xl font-bold'>Junior фронтенд разработчик</span>
                        <div>Лига Цифровой Экономики - Сентябрь 2019 - Март 2021</div>
                    </div>
                </div>
                <div>
                    <p className="mb-4">Использовал React для создания веб-интерфейсов, повысив свою квалификацию с Junior до Mid-Level разработчика.</p>
                    <p className="mb-4">Участвовал в крупных проектах, включая разработку фронтенда для Газпрома и создание внутреннего приложения для гибкого офиса, которым пользовались 530 сотрудников.</p>
                </div>
            </div>

            {/* <div className='education mt-8'>
                <span className='text-xl font-bold'>Education</span>
                <div className='mt-2'>Voronezh State University - Applied mathematics and computer science, Computer Software Engineering</div>
            </div> */}

            <div className='mt-20 flex flex-col space-y-4'>
                <span className='text-xl font-bold'>Некоторые из моих проектов</span>
                <div className='group relative cursor-pointer select-none'>
                    <a href='https://ecommerce-dashboard-gold.vercel.app' target='blank' rel='noreferrer'>
                        <Image
                            className={`${styles.boxShadow} w-full h-40 object-cover rounded-md`}
                            src='/portfolio/projects/dashboard.avif'
                            alt='Ecommerce Dashboard'
                            width={1023}
                            height={540}
                        />
                        <div className='absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-75 transition duration-300 ease-in-out'></div>
                        <div className='absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300'>
                            <p className='text-white text-center font-semibold'>An Ecommerce Dashboard</p>
                        </div>
                    </a>
                </div>
                <div className='group relative cursor-pointer select-none'>
                    <a href='https://ivang71.github.io/margelo-agency' target='blank' rel='noreferrer'>
                        <Image
                            className={`${styles.boxShadow} w-full h-40 object-cover rounded-md`}
                            src='/portfolio/projects/margelo.avif'
                            alt='A Web Agency'
                            width={1023}
                            height={540}
                        />
                        <div className='absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-75 transition duration-300 ease-in-out'></div>
                        <div className='absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300'>
                            <p className='text-white text-center font-semibold'>Margelo Agency</p>
                        </div>
                    </a>
                </div>
                <div className='group relative cursor-pointer select-none'>
                    <a href='https://www.catcasino.com' target='blank' rel='noreferrer'>
                        <Image
                            className={`${styles.boxShadow} w-full h-40 object-cover rounded-md`}
                            src='/portfolio/projects/catcasino.avif'
                            alt='Cat Casino screenshot'
                            width={1023}
                            height={540}
                        />
                        <div className='absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-75 transition duration-300 ease-in-out'></div>
                        <div className='absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300'>
                            <p className='text-white text-center font-semibold'>Cat Casino</p>
                        </div>
                    </a>
                </div>
                <div className='group relative cursor-pointer select-none'>
                    <a href='https://buymedia.biz' target='blank' rel='noreferrer'>
                        <Image
                            className={`${styles.boxShadow} w-full h-40 object-cover rounded-md`}
                            src='/portfolio/projects/buymedia.avif'
                            alt='Buymedia screenshot'
                            width={1023}
                            height={540}
                        />
                        <div className='absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-75 transition duration-300 ease-in-out'></div>
                        <div className='absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300'>
                            <p className='text-white text-center font-semibold'>Buymedia</p>
                        </div>
                    </a>
                </div>
            </div>

            <section className='body-font mt-4'>
                <div className='container px-5 py-24 mx-auto'>
                    <div className='w-full mx-auto text-center'>
                        <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' className='inline-block w-8 h-8 text-gray-400 mb-8' viewBox='0 0 975.036 975.036'>
                            <path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
                        </svg>
                        <p className='opacity-80 leading-relaxed text-lg'>Артем неизменно впечатлял меня своими сильными техническими навыками, приверженностью качеству и духом сотрудничества. Он высокомотивированный и надежный человек, который постоянно предоставляет высококачественные решения. Его стремление учиться и подход к сотрудничеству были неоценимыми активами для нашей команды.</p>
                        <span className='inline-block h-1 w-10 rounded bg-gradient-to-r from-cyan-500 to-blue-500 mt-8 mb-6'></span>
                        <h2 className='font-medium title-font tracking-wider text-sm'>ИВАН КОСТРИКОВ</h2>
                        <p className='opacity-60'>Тимлид в Лиге Цифровой Экономики</p>
                    </div>
                </div>
            </section>

            <section className='container py-16'>
                <h2 className='text-xl font-bold mb-4'>Контакты</h2>
                <div className='flex flex-col gap-4'>
                    <div className="flex justify-between items-center space-x-14">
                        <a href="mailto:artemtolv@gmail.com" className={`${styles.cta} text-[24px] p-6 bg-gray-800 rounded-xl hover:bg-gray-600 transition duration-300 ease-in-out`}>artemtolv@gmail.com</a>
                        <a href="https://github.com/Ivang71" target="_blank" rel="noreferrer" className={`${styles.cta} p-6 bg-gray-800 rounded-xl hover:bg-gray-600 transition duration-300 ease-in-out`}>
                            {/* <!-- Github --> */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-9 w-9"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/artolv" target="_blank" rel="noreferrer" className={`${styles.cta} p-6 bg-gray-800 rounded-xl hover:bg-gray-600 transition duration-300 ease-in-out`}>
                            {/* <!-- Linkedin --> */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-9 w-9"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            </svg>
                        </a>
                        <a href="https://t.me/artolv" target="_blank" rel="noreferrer" className={`${styles.cta} p-6 bg-gray-800 rounded-xl hover:bg-gray-600 transition duration-300 ease-in-out`}>
                            {/* <!-- Telegram --> */}
                            <svg
                                className="h-9 w-9"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlSpace="preserve"
                                style={{
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    strokeLinejoin: "round",
                                    strokeMiterlimit: "1.41421",
                                }}
                            >
                                <path
                                    id="telegram-1"
                                    d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </main>

    )
}
