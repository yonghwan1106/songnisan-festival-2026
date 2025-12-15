"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sun,
  Snowflake,
  ChevronDown,
  Mountain,
  BookOpen,
  Bus,
  Calculator,
  Megaphone,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  return (
    <main className="bg-gray-900 text-white">
      {/* 히어로 섹션 */}
      <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-gray-900 to-blue-900" />
        {/* 배경 이미지 */}
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1575391304128-f11964816ef6?w=1600"
            alt="속리산 가을 풍경"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 파티클 효과 */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-emerald-400/30 rounded-full"
              initial={{
                x: `${Math.random() * 100}%`,
                y: "100%",
                opacity: 0
              }}
              animate={{
                y: "-10%",
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="mb-6"
          >
            <Mountain className="w-20 h-20 mx-auto text-emerald-400" />
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            2026 속리산축제
            <br />
            <span className="text-emerald-400">콘텐츠 공모전 제안서</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            기후 위기 시대, 신화와 자연의 재해석
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 bg-orange-500/20 border border-orange-500 rounded-full px-4 py-2"
            >
              <Sun className="w-5 h-5 text-orange-400" />
              <span>여름: 도깨비와 걷는 숲</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 bg-blue-500/20 border border-blue-500 rounded-full px-4 py-2"
            >
              <Snowflake className="w-5 h-5 text-blue-400" />
              <span>겨울: 빛으로 피어나는 산사</span>
            </motion.div>
          </div>

          <motion.a
            href="#summary"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="inline-block"
          >
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </motion.a>
        </motion.div>
      </section>

      {/* Executive Summary */}
      <section id="summary" className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Executive Summary</h2>
            <p className="text-gray-400">여름과 겨울, 두 계절의 축제 핵심 비교</p>
          </motion.div>

          {/* 비교 테이블 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto mb-16"
          >
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left border border-gray-700 bg-gray-800">구분</th>
                  <th className="p-4 text-center border border-gray-700 bg-orange-500/20">
                    <div className="flex items-center justify-center gap-2">
                      <Sun className="w-5 h-5 text-orange-400" />
                      <span className="text-orange-400">여름 축제</span>
                    </div>
                  </th>
                  <th className="p-4 text-center border border-gray-700 bg-blue-500/20">
                    <div className="flex items-center justify-center gap-2">
                      <Snowflake className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-400">겨울 축제</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "축제명", summer: "속리산 야행(夜行): 도깨비와 걷는 숲", winter: "속리산 겨울연화(蓮花): 빛으로 피어나는 산사" },
                  { label: "개최 시기", summer: "2026년 6월 27일 ~ 7월 12일 (16일)", winter: "2026년 12월 19일 ~ 2027년 1월 3일 (16일)" },
                  { label: "핵심 콘텐츠", summer: "오리숲 호러 트레킹, 워터밤, 에코 피크닉", winter: "법주사 미디어아트, 소원등 트레킹, 윈터 푸드존" },
                  { label: "타겟층", summer: "MZ세대, 가족 단위", winter: "가족, 연인, 중장년 힐링족" },
                  { label: "예상 방문객", summer: "일 평균 5,000명 (총 8만명)", winter: "일 평균 4,000명 (총 6.4만명)" },
                  { label: "총 예산(안)", summer: "약 8억 원", winter: "약 10억 원" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-800/50 transition-colors">
                    <td className="p-4 border border-gray-700 font-medium bg-gray-800/50">{row.label}</td>
                    <td className="p-4 border border-gray-700 text-center">{row.summer}</td>
                    <td className="p-4 border border-gray-700 text-center">{row.winter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* 핵심 차별화 포인트 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-xl font-bold mb-6 text-center">핵심 차별화 포인트</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: "🏔️", title: "국립공원 최초", desc: "야간 호러 트레킹" },
                { icon: "🏛️", title: "유네스코 세계유산", desc: "법주사 미디어아트" },
                { icon: "🌡️", title: "기후 독립형", desc: "얼음/눈 없이도 개최" },
                { icon: "👹", title: "보은 고유 IP", desc: "도깨비 설화 + 세조" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 text-center cursor-pointer"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <div className="font-bold mb-1">{item.title}</div>
                  <div className="text-sm text-gray-400">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 페이지 네비게이션 카드 */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">제안서 상세 내용</h2>
            <p className="text-gray-400">각 섹션을 클릭하여 자세한 내용을 확인하세요</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                href: "/background",
                icon: BookOpen,
                title: "배경",
                desc: "계절성 문제, 관광자원 분석, 경쟁축제 벤치마킹",
                color: "emerald",
              },
              {
                href: "/summer",
                icon: Sun,
                title: "여름축제",
                desc: "호러 트레킹, 워터밤, 에코 피크닉 상세 계획",
                color: "orange",
              },
              {
                href: "/winter",
                icon: Snowflake,
                title: "겨울축제",
                desc: "미디어아트, 소원등 트레킹, 윈터 푸드존",
                color: "blue",
              },
              {
                href: "/infrastructure",
                icon: Bus,
                title: "인프라",
                desc: "교통, AR/메타버스, 안전관리, ESG",
                color: "purple",
              },
              {
                href: "/feasibility",
                icon: Calculator,
                title: "실현가능성",
                desc: "예산 18억, 조직도, 협력기관, 일정표",
                color: "cyan",
              },
              {
                href: "/marketing",
                icon: Megaphone,
                title: "마케팅",
                desc: "타겟 세분화, SNS 전략, 인플루언서",
                color: "pink",
              },
              {
                href: "/impact",
                icon: TrendingUp,
                title: "기대효과",
                desc: "경제효과 196억, 심사기준 대응표",
                color: "yellow",
              },
            ].map((item, i) => {
              const colorClasses: Record<string, string> = {
                emerald: "bg-emerald-500/10 border-emerald-500/30 hover:border-emerald-500 text-emerald-400",
                orange: "bg-orange-500/10 border-orange-500/30 hover:border-orange-500 text-orange-400",
                blue: "bg-blue-500/10 border-blue-500/30 hover:border-blue-500 text-blue-400",
                purple: "bg-purple-500/10 border-purple-500/30 hover:border-purple-500 text-purple-400",
                cyan: "bg-cyan-500/10 border-cyan-500/30 hover:border-cyan-500 text-cyan-400",
                pink: "bg-pink-500/10 border-pink-500/30 hover:border-pink-500 text-pink-400",
                yellow: "bg-yellow-500/10 border-yellow-500/30 hover:border-yellow-500 text-yellow-400",
              };

              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`block p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${colorClasses[item.color]}`}
                  >
                    <item.icon className="w-8 h-8 mb-4" />
                    <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-sm text-gray-400 mb-4">{item.desc}</p>
                    <div className="flex items-center gap-1 text-sm">
                      <span>자세히 보기</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 핵심 숫자 */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">한눈에 보는 핵심 숫자</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "18", unit: "억원", label: "총 예산" },
              { value: "32", unit: "일", label: "축제 기간" },
              { value: "14.4", unit: "만명", label: "예상 방문객" },
              { value: "196", unit: "억원", label: "경제 효과" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-800 rounded-2xl p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-1">
                  {item.value}
                  <span className="text-lg">{item.unit}</span>
                </div>
                <div className="text-gray-400">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="py-8 px-4 bg-gray-950 border-t border-gray-800">
        <div className="max-w-5xl mx-auto text-center text-gray-500 text-sm">
          <p className="font-bold text-white mb-2">2026 속리산축제 콘텐츠 공모전 제안서</p>
          <p>기후 위기 시대, 신화와 자연의 재해석을 통한 사계절 체류형 관광 허브 구축 전략</p>
          <p className="mt-2">충청북도 보은군 속리산 일원</p>
        </div>
      </footer>
    </main>
  );
}
