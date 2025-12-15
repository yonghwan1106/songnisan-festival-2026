"use client";

import { motion } from "framer-motion";
import { PageHeader, Section } from "@/components";
import {
  Sun,
  Ghost,
  Droplets,
  TreePine,
  MapPin,
  Clock,
  Users,
  Shield,
  Lightbulb,
  Volume2,
  Gamepad2,
  Sparkles,
  Leaf,
  Music,
  CheckCircle,
} from "lucide-react";

export default function SummerPage() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <PageHeader
        icon={Sun}
        iconColor="text-orange-400"
        tag="여름 축제"
        tagColor="bg-orange-500/20 text-orange-400"
        title="속리산 야행(夜行): 도깨비와 걷는 숲"
        subtitle="&quot;천년의 숲, 깨어나지 말아야 할 것이 깨어났다&quot;"
        gradientFrom="from-gray-900"
        gradientVia="via-orange-950/30"
        gradientTo="to-gray-900"
      />

      {/* 개요 정보 */}
      <section className="py-8 px-4 bg-gray-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Clock, label: "개최 시기", value: "2026.6.27 ~ 7.12", sub: "16일간" },
              { icon: MapPin, label: "장소", value: "속리산 일원", sub: "오리숲, 세조길" },
              { icon: Users, label: "예상 방문객", value: "일 5,000명", sub: "총 8만명" },
              { icon: Sun, label: "핵심 가치", value: "야간 관광", sub: "청년 유입, 친환경" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-800 rounded-xl p-4 text-center"
              >
                <item.icon className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                <p className="text-xs text-gray-400">{item.label}</p>
                <p className="font-bold text-orange-400">{item.value}</p>
                <p className="text-xs text-gray-500">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 기획 의도 */}
      <Section title="2.1 기획 의도 및 컨셉" subtitle="K-Horror와 Eco-Cooling의 결합">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-8 mb-8"
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            여름철 보은은 뜨겁지만, 해가 진 속리산의 숲은 서늘하다.
            본 제안은 이 <strong className="text-orange-400">&apos;자연의 냉기&apos;</strong>를
            <strong className="text-orange-400"> &apos;심리적 냉기(공포)&apos;</strong>로 전환하여
            무더위를 잊게 만드는 역발상 전략이다.
          </p>
          <p className="text-gray-300 leading-relaxed">
            단순한 공포 체험을 넘어, 보은의 고유한 도깨비 설화를 바탕으로 한 스토리텔링을 통해
            참가자가 이야기의 주인공이 되는 <strong className="text-emerald-400">&apos;이머시브(Immersive) 축제&apos;</strong>를 지향한다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 rounded-xl p-6"
          >
            <h4 className="font-bold mb-4 text-orange-400">축제 명칭 (가칭)</h4>
            <p className="text-xl font-bold">2026 속리산 쿨(Cool) & 칠(Chill) 페스티벌:</p>
            <p className="text-xl text-orange-400">도깨비의 초대</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 rounded-xl p-6"
          >
            <h4 className="font-bold mb-4 text-orange-400">슬로건</h4>
            <p className="text-xl italic">&quot;천년의 숲,</p>
            <p className="text-xl italic text-orange-400">깨어나지 말아야 할 것이 깨어났다.&quot;</p>
          </motion.div>
        </div>
      </Section>

      {/* 킬러 콘텐츠 1: 호러 트레킹 */}
      <Section
        title="2.2.1 [Night] 킬러 콘텐츠: 오리숲 호러 트레킹"
        subtitle="'도깨비의 금기(Taboo)' - 국내 유일의 국립공원 호러 트레킹"
        className="bg-gradient-to-b from-gray-900 via-orange-950/20 to-gray-900"
      >
        {/* 호러 트레킹 분위기 이미지 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden mb-8"
        >
          <img
            src="https://images.unsplash.com/photo-1672249382206-793391bc1b67?w=1200"
            alt="신비로운 숲 분위기"
            className="w-full h-56 object-cover"
          />
          <p className="text-xs text-gray-500 mt-2 text-center">야간 호러 트레킹 컨셉 이미지 | 출처: Unsplash</p>
        </motion.div>

        {/* 시나리오 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-800 border-l-4 border-orange-500 rounded-r-xl p-8 mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <Ghost className="w-6 h-6 text-orange-400" />
            <h4 className="text-xl font-bold text-orange-400">시나리오</h4>
          </div>
          <blockquote className="text-lg text-gray-300 italic leading-relaxed">
            &quot;과거 속리산에는 인간의 소원을 들어주는 대신 영혼을 가져가는 도깨비가 살았다.
            봉인되었던 도깨비가 2026년 여름, 다시 깨어났다.
            <span className="text-orange-400 font-bold"> 당신은 숲속에 흩어진 5개의 &apos;봉인 부적(대추나무 조각)&apos;을 찾아
            도깨비를 다시 잠재워야 한다.</span>&quot;
          </blockquote>
        </motion.div>

        {/* 연출 전략 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h4 className="text-xl font-bold mb-6">연출 및 운영 전략</h4>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: TreePine,
                title: "자연 지형 활용",
                desc: "인위적인 구조물 설치를 지양하고, 숲의 나무, 바위, 다리 밑을 활용하여 귀신(연기자)이 등장. 조명은 붉은색과 푸른색 LED를 최소한으로 사용하여 숲의 원초적인 어둠을 강조.",
                color: "emerald",
              },
              {
                icon: Volume2,
                title: "청각적 공포 극대화",
                desc: "숲속 곳곳에 지향성 스피커를 설치하여 바람 소리, 아이 웃음소리, 나뭇가지 부러지는 소리 등 ASMR 형태의 공포 사운드 송출. 시각적 자극보다 더 깊은 심리적 공포 유발.",
                color: "purple",
              },
              {
                icon: Gamepad2,
                title: "인터랙티브 미션",
                desc: "도깨비와의 씨름(팔씨름), 수수께끼 풀기 등 설화 기반의 미션을 수행해야 통과할 수 있는 관문 설치. 단순 관람이 아닌 참여형 콘텐츠로서 몰입도 극대화.",
                color: "orange",
              },
              {
                icon: Shield,
                title: "안전 관리",
                desc: "어두운 숲길임을 감안하여 야광 유도선을 설치하고, 구간마다 안전요원을 '저승사자' 복장으로 배치하여 컨셉을 해치지 않으면서 안전 확보. 사전 예약제로 시간당 입장 인원 제한.",
                color: "blue",
              },
            ].map((item, i) => {
              const colorClasses: Record<string, string> = {
                emerald: "border-emerald-500/30 bg-emerald-500/10",
                purple: "border-purple-500/30 bg-purple-500/10",
                orange: "border-orange-500/30 bg-orange-500/10",
                blue: "border-blue-500/30 bg-blue-500/10",
              };
              const iconColor: Record<string, string> = {
                emerald: "text-emerald-400",
                purple: "text-purple-400",
                orange: "text-orange-400",
                blue: "text-blue-400",
              };
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`border rounded-xl p-6 ${colorClasses[item.color]}`}
                >
                  <item.icon className={`w-8 h-8 ${iconColor[item.color]} mb-4`} />
                  <h5 className="font-bold mb-2">{item.title}</h5>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Section>

      {/* 액티비티 콘텐츠: 워터밤 */}
      <Section title="2.2.2 액티비티 콘텐츠: 속리산 워터밤" subtitle="'대추나무 물총 전쟁' - 낮 시간대 가족 단위 물놀이">
        {/* 워터밤 이미지 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden mb-8"
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1661306543132-93937b4c242e?w=1200"
            alt="워터 페스티벌 분위기"
            className="w-full h-48 object-cover"
          />
          <p className="text-xs text-gray-500 mt-2 text-center">워터밤 페스티벌 컨셉 이미지 | 출처: Unsplash</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Droplets className="w-6 h-6 text-blue-400" />
              <h4 className="text-xl font-bold">대추 수호 대작전</h4>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 mb-6">
              <p className="text-gray-300 mb-4">
                참가자들을 <strong className="text-orange-400">&apos;대추 수호대&apos;</strong>와
                <strong className="text-purple-400"> &apos;도깨비 군단&apos;</strong>으로 나누어 대규모 물총 싸움 진행.
              </p>
              <p className="text-sm text-gray-400">
                대장(진행자)의 조끼에 달린 대추 모형이 물에 젖어 색이 변하면 패배하는 방식.
              </p>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-cyan-400" />
              <h4 className="text-xl font-bold">쿨링 포그 & 레인 존</h4>
            </div>
            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-6">
              <p className="text-gray-300 mb-4">
                잔디광장 상공에 인공 강우 시설과 쿨링 포그를 설치하여,
                물총 싸움에 참여하지 않는 관람객도 시원함을 느낄 수 있도록 조성.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-emerald-400" />
              <h4 className="text-xl font-bold">친환경 물놀이</h4>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  인근 저수지의 물을 정수하여 사용
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  화학 약품 사용 배제
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  축제 종료 후 자연으로 환원될 수 있도록 관리
                </li>
              </ul>
            </div>

            <div className="mt-6 bg-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span className="font-bold">장소</span>
              </div>
              <p className="text-gray-300">속리산 잔디광장 및 인근 유휴 부지</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* 힐링 콘텐츠: 에코 피크닉 */}
      <Section
        title="2.2.3 힐링 콘텐츠: 계곡 에코 피크닉"
        subtitle="'신선놀음' - 건전한 피서 문화 제안"
        className="bg-gradient-to-b from-gray-900 via-emerald-950/20 to-gray-900"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: TreePine,
              title: "프라이빗 피크닉 존",
              desc: "보은군에서 공식적으로 파라솔과 돗자리, 캠핑 의자를 대여해주는 '피크닉 패키지' 운영. 사전 예약제로 운영하여 과밀 방지.",
              color: "emerald",
            },
            {
              icon: Sparkles,
              title: "보은 대추 도시락",
              desc: "지역 식당과 협업하여 '대추 닭강정', '산채 주먹밥', '대추 식혜' 등으로 구성된 도시락 제공. 다회용기 사용으로 쓰레기 저감.",
              color: "orange",
            },
            {
              icon: Music,
              title: "어쿠스틱 버스킹",
              desc: "과도한 소음이 아닌, 자연과 어우러지는 어쿠스틱 밴드나 핸드팬 연주 등을 소규모로 진행하여 힐링 분위기 조성.",
              color: "purple",
            },
          ].map((item, i) => {
            const colorClasses: Record<string, string> = {
              emerald: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
              orange: "border-orange-500/30 bg-orange-500/10 text-orange-400",
              purple: "border-purple-500/30 bg-purple-500/10 text-purple-400",
            };
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`border rounded-xl p-6 ${colorClasses[item.color]}`}
              >
                <item.icon className="w-10 h-10 mb-4" />
                <h4 className="font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 bg-gray-800 rounded-xl p-6"
        >
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-5 h-5 text-orange-400" />
            <span className="font-bold">장소</span>
          </div>
          <p className="text-gray-300">서원계곡 및 만수계곡 지정 구역</p>
        </motion.div>
      </Section>

      {/* 차별화 전략 */}
      <Section title="2.3 차별화 전략 및 기대 효과">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Lightbulb,
              title: "차별화",
              desc: "기존 테마파크의 인공적인 호러와 달리, 유네스코 유산의 숲이라는 '압도적인 리얼리티' 제공",
              color: "orange",
            },
            {
              icon: Users,
              title: "타겟 확장",
              desc: "호러 콘텐츠로 MZ세대 유입, 물놀이·피크닉으로 가족 단위 관광객 유지하는 '투 트랙' 전략",
              color: "emerald",
            },
            {
              icon: Sparkles,
              title: "경제 효과",
              desc: "야간 콘텐츠 도입 → 숙박 수요 창출 → 체류형 관광객 증대 및 야간 상권 활성화",
              color: "blue",
            },
          ].map((item, i) => {
            const colorClasses: Record<string, string> = {
              orange: "bg-orange-500/20 border-orange-500 text-orange-400",
              emerald: "bg-emerald-500/20 border-emerald-500 text-emerald-400",
              blue: "bg-blue-500/20 border-blue-500 text-blue-400",
            };
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`border rounded-xl p-6 text-center ${colorClasses[item.color]}`}
              >
                <item.icon className="w-10 h-10 mx-auto mb-4" />
                <h4 className="font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* 푸터 */}
      <footer className="py-8 px-4 bg-gray-950 border-t border-gray-800">
        <div className="max-w-5xl mx-auto text-center text-gray-500 text-sm">
          <p className="font-bold text-white mb-2">2026 속리산축제 콘텐츠 공모전 제안서</p>
          <p>제2장: 여름 축제 - 속리산 야행(夜行): 도깨비와 걷는 숲</p>
        </div>
      </footer>
    </main>
  );
}
