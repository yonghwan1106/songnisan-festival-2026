"use client";

import { motion } from "framer-motion";
import { PageHeader, Section } from "@/components";
import {
  Snowflake,
  Sparkles,
  Lamp,
  Coffee,
  MapPin,
  Clock,
  Users,
  Lightbulb,
  CheckCircle,
  Footprints,
  VolumeX,
} from "lucide-react";

export default function WinterPage() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <PageHeader
        icon={Snowflake}
        iconColor="text-blue-400"
        tag="겨울 축제"
        tagColor="bg-blue-500/20 text-blue-400"
        title="속리산 겨울연화(蓮花): 빛으로 피어나는 산사"
        subtitle="&quot;천년의 빛, 당신의 소원을 비추다&quot;"
        gradientFrom="from-gray-900"
        gradientVia="via-blue-950/30"
        gradientTo="to-gray-900"
      />

      {/* 개요 정보 */}
      <section className="py-8 px-4 bg-gray-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Clock, label: "개최 시기", value: "2026.12.19 ~ 2027.1.3", sub: "16일간" },
              { icon: MapPin, label: "장소", value: "법주사 일원", sub: "팔상전, 세조길" },
              { icon: Users, label: "예상 방문객", value: "일 4,000명", sub: "총 6.4만명" },
              { icon: Snowflake, label: "핵심 가치", value: "치유·소원", sub: "미디어아트, 힐링" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-800 rounded-xl p-4 text-center"
              >
                <item.icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <p className="text-xs text-gray-400">{item.label}</p>
                <p className="font-bold text-blue-400">{item.value}</p>
                <p className="text-xs text-gray-500">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 기획 의도 */}
      <Section title="3.1 기획 의도 및 컨셉" subtitle="기후 위기 시대의 새로운 겨울 축제 모델">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-8 mb-8"
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            전통적인 겨울 축제의 강자였던 &apos;얼음 낚시&apos;와 &apos;눈꽃 축제&apos;는 기후 온난화로 인해 존폐 위기에 처해 있다.
            2026년 겨울, 보은군은 <strong className="text-blue-400">얼음이나 눈의 유무와 관계없이</strong> 지속 가능한
            <strong className="text-purple-400"> &apos;빛&apos;과 &apos;문화유산&apos;</strong>을 테마로 한 축제를 제안한다.
          </p>
          <p className="text-gray-300 leading-relaxed">
            겨울의 삭막함을 빛의 온기로 채우고, 법주사의 역사적 가치를 미디어아트로 승화시키는 <strong className="text-emerald-400">고품격 힐링 축제</strong>이다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 rounded-xl p-6"
          >
            <h4 className="font-bold mb-4 text-blue-400">축제 명칭 (가칭)</h4>
            <p className="text-xl font-bold">2026 속리산 겨울 소원 축제:</p>
            <p className="text-xl text-blue-400">빛의 숲, 세조의 길</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 rounded-xl p-6"
          >
            <h4 className="font-bold mb-4 text-blue-400">슬로건</h4>
            <p className="text-xl italic">&quot;천년의 빛,</p>
            <p className="text-xl italic text-blue-400">당신의 소원을 비추다.&quot;</p>
          </motion.div>
        </div>
      </Section>

      {/* 킬러 콘텐츠: 미디어아트 */}
      <Section
        title="3.2.1 킬러 콘텐츠: 법주사 팔상전 미디어아트"
        subtitle="'미륵의 빛' - 국보 제55호에 프로젝션 매핑"
        className="bg-gradient-to-b from-gray-900 via-blue-950/20 to-gray-900"
      >
        {/* 미디어아트/등불 축제 이미지 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-4 mb-8"
        >
          <div className="rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1500754088824-ce0582cfe45f?w=800"
              alt="소원등 축제"
              className="w-full h-40 object-cover"
            />
            <p className="text-xs text-gray-500 mt-2 text-center">소원등 컨셉 이미지 | 출처: Unsplash</p>
          </div>
          <div className="rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1544070643-24128d1f6033?w=800"
              alt="등불 축제"
              className="w-full h-40 object-cover"
            />
            <p className="text-xs text-gray-500 mt-2 text-center">빛의 터널 컨셉 이미지 | 출처: Unsplash</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-purple-500/10 border border-purple-500/30 rounded-2xl p-8 mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-purple-400" />
            <h4 className="text-xl font-bold text-purple-400">프로젝션 매핑 공연</h4>
          </div>
          <p className="text-gray-300 mb-4">
            국보 제55호 법주사 팔상전은 국내 유일의 목탑으로서 건축적, 역사적 가치가 매우 높다.
            이 <strong className="text-blue-400">40m 높이의 목탑</strong>을 스크린으로 활용하여
            프로젝션 매핑 공연을 펼친다.
          </p>
          <p className="text-sm text-gray-400">
            * 목조 문화재에 직접적인 열을 가하지 않는 최신 레이저 프로젝터 사용, 문화재청과 긴밀한 협의
          </p>
        </motion.div>

        {/* 3막 구성 */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              act: "1막",
              title: "속리산의 사계",
              desc: "40m 높이의 목탑에 속리산의 봄꽃, 여름의 녹음, 가을의 단풍, 겨울의 설경이 파노라마처럼 펼쳐진다.",
              color: "emerald",
            },
            {
              act: "2막",
              title: "미륵의 하생",
              desc: "금동미륵대불과 연동하여, 미래의 부처가 내려와 중생을 구제한다는 미륵신앙의 이야기를 웅장한 빛과 사운드로 구현.",
              color: "purple",
            },
            {
              act: "3막",
              title: "천년의 소원",
              desc: "사전 접수받은 관람객들의 소원 메시지가 캘리그라피 형태로 탑에 투영. AR 기술로 스마트폰에서 풍등이 날아오르는 연출.",
              color: "blue",
            },
          ].map((item, i) => {
            const colorClasses: Record<string, string> = {
              emerald: "border-emerald-500/30 bg-emerald-500/10",
              purple: "border-purple-500/30 bg-purple-500/10",
              blue: "border-blue-500/30 bg-blue-500/10",
            };
            const textColor: Record<string, string> = {
              emerald: "text-emerald-400",
              purple: "text-purple-400",
              blue: "text-blue-400",
            };
            return (
              <motion.div
                key={item.act}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`border rounded-xl p-6 ${colorClasses[item.color]}`}
              >
                <span className={`text-sm font-bold ${textColor[item.color]}`}>{item.act}</span>
                <h4 className="text-lg font-bold text-white mt-1 mb-3">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* 소원등 트레킹 */}
      <Section title="3.2.2 체험 콘텐츠: 세조길 소원등 트레킹" subtitle="'왕의 산책' - 빛의 터널을 걷다">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Lamp className="w-6 h-6 text-yellow-400" />
            <h4 className="text-xl font-bold text-yellow-400">빛의 터널 조성</h4>
          </div>
          <p className="text-gray-300">
            겨울밤, 오리숲에서 세조길로 이어지는 구간을 <strong className="text-yellow-400">수천 개의 전통 등(Lantern)</strong>으로 장식하여
            환상적인 빛의 터널을 조성한다.
          </p>
          <p className="text-sm text-gray-400 mt-2">장소: 법주사 입구 ~ 세조길 목욕소 구간</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Lamp,
              title: "나만의 소원등 만들기",
              desc: "축제장 입구에서 관람객이 직접 한지로 등을 만들고 소원을 적는다. 이 등을 들고 세조길을 걷는 '제등 행렬' 진행.",
              color: "yellow",
            },
            {
              icon: Footprints,
              title: "세조의 힐링 로드",
              desc: "세조가 목욕하고 피부병을 고쳤다는 '목욕소' 지점에서 LED 연꽃 조명을 물에 띄우는 의식. 액운을 씻어내고 새해 복 기원.",
              color: "blue",
            },
            {
              icon: VolumeX,
              title: "침묵의 트레킹",
              desc: "특정 시간대에는 대화를 금지하고 오직 빛과 자연의 소리에 집중하는 '묵언 트레킹' 프로그램. 명상과 치유의 경험 제공.",
              color: "purple",
            },
          ].map((item, i) => {
            const colorClasses: Record<string, string> = {
              yellow: "border-yellow-500/30 bg-yellow-500/10 text-yellow-400",
              blue: "border-blue-500/30 bg-blue-500/10 text-blue-400",
              purple: "border-purple-500/30 bg-purple-500/10 text-purple-400",
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
                <item.icon className="w-8 h-8 mb-4" />
                <h4 className="font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* 윈터 푸드존 */}
      <Section
        title="3.2.3 식음 콘텐츠: 보은 윈터 푸드존"
        subtitle="'따뜻한 대추의 위로' - 대추 특산물 활용 겨울 간식"
        className="bg-gradient-to-b from-gray-900 via-red-950/20 to-gray-900"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Coffee className="w-6 h-6 text-red-400" />
            <h4 className="text-xl font-bold">특별 메뉴</h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "대추 라떼 & 대추차", desc: "보은 대추를 진하게 우려낸 차와 대추 크림 라떼" },
              { name: "대추 찐빵 & 호떡", desc: "팥 대신 대추 앙금을 넣은 따뜻한 간식" },
              { name: "도깨비 팥죽", desc: "동지 시즌 '액운 타파' 메뉴, 대규모 나눔 행사" },
              { name: "대추 막걸리", desc: "보은 특산 대추로 만든 전통 막걸리" },
            ].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-red-500/10 border border-red-500/30 rounded-xl p-4"
              >
                <h5 className="font-bold text-red-400 mb-1">{item.name}</h5>
                <p className="text-xs text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-800/50 rounded-xl p-6"
        >
          <h4 className="font-bold mb-4">투명 돔 텐트 (이글루형)</h4>
          <p className="text-gray-300">
            관람객들이 추위를 피하며 음식을 즐길 수 있도록 투명 돔 텐트 설치.
            내부를 감성적인 캠핑 소품으로 꾸며 <strong className="text-blue-400">인스타그래머블 포토존</strong>으로 활용.
          </p>
        </motion.div>
      </Section>

      {/* 차별화 전략 */}
      <Section title="3.3 차별화 전략 및 기대 효과">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Lightbulb,
              title: "계절성 극복",
              desc: "얼음이나 눈이 없어도 개최 가능한 '빛' 중심의 축제로 기후 리스크 최소화",
              color: "blue",
            },
            {
              icon: Users,
              title: "체류 유도",
              desc: "야간 미디어아트와 트레킹은 저녁 시간대 방문 유도 → 저녁 식사와 숙박으로 연결",
              color: "emerald",
            },
            {
              icon: CheckCircle,
              title: "문화재 활용",
              desc: "법주사라는 세계적 유산을 배경으로 축제의 품격 제고, 국비 지원 명분 확보",
              color: "purple",
            },
          ].map((item, i) => {
            const colorClasses: Record<string, string> = {
              blue: "bg-blue-500/20 border-blue-500 text-blue-400",
              emerald: "bg-emerald-500/20 border-emerald-500 text-emerald-400",
              purple: "bg-purple-500/20 border-purple-500 text-purple-400",
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
          <p>제3장: 겨울 축제 - 속리산 겨울연화(蓮花): 빛으로 피어나는 산사</p>
        </div>
      </footer>
    </main>
  );
}
