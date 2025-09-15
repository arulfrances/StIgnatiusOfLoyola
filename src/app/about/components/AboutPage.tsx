"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { components } from "@/configs/DesignSystem";
import { HandHeartIcon, UsersIcon, BookOpenIcon } from "lucide-react";

// Story content split into paragraphs for JSX rendering
const storyParagraphs = [
  "It was part of the Kodivery center, from the beginning of Christianity, called the Sathyamangalam mission, started by Fr. Benedict da Costa in 1643, till 1940, when the diocese of Coimbatore was divided.",
  "By 1650, Kodivery was one of the earliest centers and it is clearly mentioned that these two villages (Peria Kodivery and Akkari Kodivery), divided by the river Bhavani, were one village and both had chapels. Both are inhabited by the same caste of Kaikolars.",
  "There was a chapel at Palazhyoor, the original settlement till 1933, when a great flood washed away a part of it. The Maniyakaran’s family used the unused chapel as a cowshed. Fearing such floods, most people settled down further away on higher grounds. Some remained in the original site which has the name Palazhyoor.",
  "Till 1940, both Kodiveries formed one parish, and hence in all earlier history, referred to as Kodivery only.",
  "To go back to the ancient history, Kodivery was one of the centers of the Jesuits mission of Sathy; in 1650, as one of the 12 main centers, in 1662 as one of the 23 centers, and again in 1666 when Sathy was divided into two. The Sathy center was looked after by Fr. Arcolini S.J (who succeeded Fr. da Costa). By then the chief residence had shifted to Kanuvakarai, with Kodivery, etc., as sub-centers.",
  "In 1686, it was a part of Kanuvakarai when this mission was attached to the newly erected Mysore mission of the Jesuits. In 1710, it was a part of Kanuvakarai, which was one of the five centers of resident priests.",
  "The new converts during those years had to go through lots of persecution, especially in the form of social ostracization (exclusion from the village community as out-caste). Later, during wars between the Naicks of Mysore and of Madura and then of the Naicks of Tanjure (Shaji), on many occasions churches were demolished, and Christians had to flee to the neighboring mountains of Thalavadi and Gundri.",
  "The first converts were weavers, including both Sedars (Canarese speaking Devanga Chettiars) and Kaikolars (Tamil speaking). There were big clashes between them before their conversion, even to the point of being mortal enemies. But after conversion by 1653, the Christians of both communities forgot all their old enmity and lived in harmony and Christian fellowship.",
  "In 1744, it was attached to Tharupalli (near Sathy), which became one of the 6 Residences. This Tharupalli must be the ancient head village of this area, called Thadapalli near Akkarai Kodiveri, with a big church, priest’s residence, and a small school (the first of its kind). But during Tippu’s wars, it had totally disappeared without leaving any trace of its existence.",
  "It is interesting to find the mention of Thanaiakan Kottai in 1724 (now submerged inside the Bhavanisagar dam), where there were Christians. They had built a fine church under the care of Fr Rainerio Conscinuti S.J., who was then in charge of Kanuvakarai. They were harassed by the Captain of the fort for not helping in the construction of a Hindu temple, but they remained firm, and finally the Captain himself was removed.",
  "These Christians would have been Catholic Maravas from Ramnad. After the Society of Jesus was suppressed in 1773, all the churches were destroyed by Tippu Sultan, and the Christians were scattered.",
  "By 1798, the missionaries of the Paris Missionary Society had taken charge and gradually gathered the scattered flock. In 1803, Fr. Dubois with three Indian priests was at Kodivery, and he built a church at Peria Kodivery and a presbytery.",
  "In 1842 Msgr. Bonnand visited Kodivery and confirmed the Christians. Probably the old church at Palazhyoor was built around this time by Fr. Dubois and by the Indian priest Fr. Germanus between 1803-1820.",
  "Fr. Bigot Beauclair (Devapthinather) visited all the Christian centers during 1837-1840, including Kodivery.",
  "In 1846 when Coimbatore Pro-vicariate was formed, Kodivery was one of the ten vicariates. The Kovil Maniakaran system was introduced on 16.9.1847 by Msgr. de Bresillac, and hence the Kovil Maniyakaran families of both Kodiveries must have been from 1847.",
  "Interestingly, a letter written by Fr. Pajean in 1850 writes, “At Kodivery some Maniyakarars are causing much trouble to the people, who would not submit to their tyrannical fancies.”",
  "In the statistics of Coimbatore Vicariate for the year 1859, Akkarai Kodivery is explicitly mentioned as a separate Christian village belonging to Kodivery district, with 180 Christians, a church and a house for priests.",
  "Coming to more recent times, after the division of the diocese in 1940, the church at Palazhyoor in honour of St. Ignatius of Loyola (a relic of the preceding Jesuit mission work), was rebuilt. The first Parish Priest of Akkarai Kodivery (residing at Kalam) Fr. A. Maria Ambrose (1942-1950) built the present large church in the new settlement, at a cost of Rs. 45,000 and it was blessed on 15.5.1947.",
  "Fr. T. C. Adaikalam (1950-1955) built new chapels at Udaya Goundan Palayam and Elathur during his tenure. Fr. P. Irudaya Samy was the first Parish Priest exclusively for Akkarai Kodivery in 1958.",
  "A new church at Udaya Goundan Palayam was constructed by Fr. Dhanaraj and blessed on 14.11.1992 by Bishop Ambrose.",
  "There was a small school at Palayoor since 1910. In 1956, Fr. T. C. Adaikkalam built a new school building at a cost of Rs 8,000, near the present church.",
  "In 1963, Fr. Joseph Pragasam brought the Presentation Convent, which was given responsibility of running the school but under the management of the parish priest.",
  "A new convent was built in 1967, and in the same year a home for poor girls run by the convent (under the management of the parish priest) was constructed by Fr. Joseph Pragasam.",
  "In 1988, the school was upgraded into a middle school, and Fr. Jacob built a new block in 1990. The new presbytery was blessed on 23.12.1990.",
  "As a memorial of the silver jubilee of the Home for girls, a new two-storied building was constructed by Fr. Dhanaraj, blessed by Bishop Ambrose on 11.12.1993.",
  "In 1993, the Brothers of St. Michael started a house at a farm bought by them near Akkarai Kodivery.",
  "A new church was built at Elathur and blessed on 11.11.2001.",
  "In 1995, the Sisters of Assisi started a convent with a hospital; their new convent building was blessed on 7.11.2002.",
  "A wayside grotto in honour of Our Lady of Vellankanni was built on Sathy main road in 2002 by Fr. Dhanaraj.",
  "A plot of agricultural land was purchased by him to provide water supply to the orphanage and support the institution.",
  "Finally, Fr. Joseph Sagayam, with support of parishioners and the diocese, practically rebuilt the parish church, and Bishop Thomas Aquinas consecrated it on 13.12.2004.",
  "In remembrance, he published a souvenir containing the history of Coimbatore and Akkarai Kodivery by Fr. Ephraem."
];

const aboutContent = {
  hero: {
    title: "Welcome to St.Ignatius of Loyala Parish",
    subtitle: "A community united in faith, service, and love",
    backgroundImage: "/assets/images/Church-FrontView.jpg",
  },
  story: {
    title: "About Parish",
    image: "/assets/images/ChurchView.jpg",
    button: {
      text: "Learn More",
      href: "/about/history",
    },
  },
  values: [
    {
      icon: HandHeartIcon,
      title: "Service & Love",
      description:
        "Dedicated to serving our community and spreading God's love through action.",
    },
    {
      icon: UsersIcon,
      title: "Community",
      description:
        "Building strong relationships and supporting each other in faith and life.",
    },
    {
      icon: BookOpenIcon,
      title: "Biblical Teaching",
      description: "Committed to sound biblical teaching and spiritual growth.",
    },
  ],
  mission: {
    title: "Our Mission",
    content:
      "To know, enjoy, and express the love of Jesus through authentic worship, meaningful relationships, and service to our community.",
    stats: [
      { number: "1000+", label: "Members" },
      { number: "50+", label: "Ministries" },
      { number: "20+", label: "Years of Service" },
    ],
  },
  team: {
    title: "Leadership Team",
    description: "Meet the dedicated individuals who help guide our community.",
    members: [
      {
        name: "Rev. Fr. John Paul Vincent",
        role: "Parish Priest",
        image: "/assets/images/father-john-paul-vincent.jpg",
      },
    ],
  },
};

export default function AboutPage() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gray-900 -mt-[104px] md:-mt-[112px]">
        <div className="absolute inset-0">
          <Image
            src={
              aboutContent.hero.backgroundImage ||
              "/assets/icons/new-placeholder.svg"
            }
            alt=""
            fill
            className="object-cover object-center opacity-60"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent" />
        </div>

        <div className="relative min-h-[60vh] flex items-center">
          <div className="container mx-auto px-4 pt-[104px] md:pt-[112px]">
            <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {aboutContent.hero.title}
              </motion.h1>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <section className={components.sections.default}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-darkMossGreen mb-4">
                {aboutContent.story.title}
              </h2>
              <div
                className={`text-base md:text-lg text-pakistanGreen/80 mb-6 transition-all duration-300 px-2 ${
                  expanded ? "max-h-none" : "max-h-96 overflow-hidden"
                }`}
                style={{ whiteSpace: "pre-line" }}
              >
                {storyParagraphs.map((para, idx) => (
                  <p key={idx} className="mb-4">
                    {para}
                  </p>
                ))}
              </div>
              <button
                onClick={() => setExpanded(!expanded)}
                className={`${components.buttons.primary} w-full md:w-auto`}
              >
                {expanded ? "Show Less" : "Read More"}
              </button>
              <Link href={aboutContent.story.button.href}>
                <button
                  className={`${components.buttons.primary} w-full md:w-auto mt-4`}
                >
                  {aboutContent.story.button.text}
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden"
            >
              <Image
                src={aboutContent.story.image}
                alt="About Parish"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={components.sections.dark}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {aboutContent.values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-white/5"
              >
                <value.icon className="w-10 h-10 md:w-12 md:h-12 text-earthYellow mx-auto mb-4" />
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {value.title}
                </h3>
                <p className="text-sm md:text-base text-white/80">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Stats Section */}
      <section className={components.sections.default}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-darkMossGreen mb-4">
              {aboutContent.mission.title}
            </h2>
            <p className="text-base md:text-lg text-pakistanGreen/80">
              {aboutContent.mission.content}
            </p>
          </div>

          {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {aboutContent.mission.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-white/50"
              >
                <div className="text-3xl md:text-4xl font-bold text-earthYellow mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-pakistanGreen">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Team Section */}
      <section className={components.sections.dark}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {aboutContent.team.title}
            </h2>
            <p className="text-base md:text-lg text-white/80">
              {aboutContent.team.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {aboutContent.team.members.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={components.cards.default}
              >
                <div className="relative h-48 sm:h-56 md:h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 md:p-6 text-center">
                  <h3 className="text-lg md:text-xl font-semibold text-darkMossGreen mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm md:text-base text-pakistanGreen/80">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
