"use client";

import { motion } from "framer-motion";
import { PageHeader, Section } from "@/components";
import {
  Bus,
  Smartphone,
  Shield,
  Leaf,
  MapPin,
  Car,
  Gamepad2,
  Globe,
  AlertTriangle,
  Flame,
  Recycle,
  Heart,
} from "lucide-react";

export default function InfrastructurePage() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <PageHeader
        icon={Bus}
        iconColor="text-purple-400"
        tag="제4장"
        tagColor="bg-purple-500/20 text-purple-400"
        title="인프라 구축 및 운영 로드맵"
        subtitle="교통, 스마트 기술, 안전 관리, ESG 경영"
        gradientFrom="from-gray-900"
        gradientVia="via-purple-950/30"
        gradientTo="to-gray-900"
      />

      {/* 4.1 교통 및 접근성 */}
      <Section title="4.1 교통 및 접근성 혁신" subtitle="'말티재 커넥션(Maltijae Connection)'">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-purple-500/10 border border-purple-500/30 rounded-2xl p-8 mb-8"
        >
          <p className="text-gray-300 leading-relaxed">
            보은읍, 말티재, 속리산 법주사 일원은 지리적으로 분산되어 있어 관광객의 이동이 불편할 수 있다.
            이를 해결하기 위해 축제 기간 동안 <strong className="text-purple-400">순환 셔틀버스</strong>를 운행한다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* 도깨비 셔틀버스 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 border border-gray-700 rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <Bus className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="text-xl font-bold">도깨비 셔틀버스</h4>
            </div>

            <div className="space-y-4">
              <div>
                <h5 className="font-bold text-purple-400 mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> 노선
                </h5>
                <div className="bg-gray-900 rounded-lg p-4 text-sm">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded">보은 시외버스터미널</span>
                    <span className="text-gray-500">→</span>
                    <span className="bg-orange-500/20 text-orange-400 px-2 py-1 rounded">말티재 전망대/솔향공원</span>
                    <span className="text-gray-500">→</span>
                    <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded">속리산 터미널</span>
                    <span className="text-gray-500">→</span>
                    <span className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded">법주사 입구</span>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-bold text-purple-400 mb-2">디자인</h5>
                <p className="text-sm text-gray-400">
                  버스 내외부를 도깨비 캐릭터나 전통 문양으로 랩핑하고, 내부 조명을 활용하여 버스 탑승 순간부터 축제가 시작되는 느낌 제공
                </p>
              </div>

              <div>
                <h5 className="font-bold text-purple-400 mb-2">운영</h5>
                <p className="text-sm text-gray-400">
                  축제 입장권 소지자 무료 탑승. 주요 정거장에 스마트 승강장을 설치하여 버스 위치 정보를 실시간 제공
                </p>
              </div>
            </div>
          </motion.div>

          {/* 주차 전략 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 border border-gray-700 rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                <Car className="w-6 h-6 text-cyan-400" />
              </div>
              <h4 className="text-xl font-bold">주차 전략</h4>
            </div>

            <div className="space-y-4 text-gray-300">
              <p>
                성수기 법주사 인근 주차난 해소를 위해 외곽의 스포츠파크나 유휴 부지를 임시 주차장으로 지정하고, 셔틀버스와 연계한다.
              </p>

              <div className="bg-gray-900 rounded-lg p-4">
                <h5 className="font-bold text-cyan-400 mb-3">주차장 운영 계획</h5>
                <ul className="text-sm space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    외곽 임시 주차장 3개소 지정
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    주차장 ↔ 법주사 셔틀 10분 간격 운행
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    앱을 통한 실시간 주차 현황 제공
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* 4.2 스마트 기술 */}
      <Section
        title="4.2 스마트 기술 도입과 디지털 마케팅"
        className="bg-gradient-to-b from-gray-900 via-cyan-950/20 to-gray-900"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {/* AR 스탬프 투어 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Smartphone className="w-8 h-8 text-cyan-400" />
              <div>
                <h4 className="text-xl font-bold">AR 스탬프 투어</h4>
                <p className="text-sm text-cyan-400">&apos;속리산 요괴 도감&apos;</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-300">
              <p>
                앱(App)을 통해 속리산 주요 지점에서 AR 카메라를 비추면 숨어있는 도깨비나 산신령 캐릭터가 나타난다.
              </p>

              <div className="bg-gray-900/50 rounded-lg p-4">
                <h5 className="font-bold text-cyan-400 mb-2 flex items-center gap-2">
                  <Gamepad2 className="w-4 h-4" /> 게이미피케이션
                </h5>
                <ul className="text-sm space-y-2 text-gray-400">
                  <li>• 정이품송, 법주사, 세조길 등 주요 지점 스캔</li>
                  <li>• 도깨비/산신령 캐릭터 수집</li>
                  <li>• 경품 증정: 지역 상품권, 대추 굿즈</li>
                </ul>
              </div>

              <div className="text-sm text-gray-400 bg-emerald-500/10 rounded-lg p-3">
                <strong className="text-emerald-400">효과:</strong> MZ세대 참여 유도, 축제 동선 자연스럽게 분산
              </div>
            </div>
          </motion.div>

          {/* 메타버스 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-8 h-8 text-purple-400" />
              <div>
                <h4 className="text-xl font-bold">메타버스 속리산</h4>
                <p className="text-sm text-purple-400">가상 체험 플랫폼</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-300">
              <p>
                제페토나 로블록스 등 메타버스 플랫폼에 속리산 맵을 구축하여, 축제 전부터 가상의 속리산을 체험하게 하고 기대감을 조성한다.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { platform: "제페토", desc: "10~20대 타겟" },
                  { platform: "로블록스", desc: "글로벌 확장" },
                ].map((item) => (
                  <div key={item.platform} className="bg-gray-900/50 rounded-lg p-3 text-center">
                    <p className="font-bold text-purple-400">{item.platform}</p>
                    <p className="text-xs text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="text-sm text-gray-400">
                • 가상 속리산 탐험<br/>
                • 도깨비 캐릭터 코스튬<br/>
                • 축제 미리보기 이벤트
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* 4.3 안전 관리 및 ESG */}
      <Section title="4.3 안전 관리 및 ESG 경영">
        {/* 안전 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-6">
            <Shield className="w-6 h-6 text-blue-400" />
            <h4 className="text-xl font-bold">안전(Safety)</h4>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* 여름 안전 */}
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6">
              <h5 className="font-bold text-orange-400 mb-4">여름 축제</h5>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                  계곡 물놀이 구역 수질 검사 강화 및 안전요원 상시 배치
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                  야간 트레킹 시 야광 표지판 설치
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                  구간별 안전 패트롤 운영
                </li>
              </ul>
            </div>

            {/* 겨울 안전 */}
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
              <h5 className="font-bold text-blue-400 mb-4">겨울 축제</h5>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <Flame className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  결빙 예상 구간 제설 작업 철저
                </li>
                <li className="flex items-start gap-2">
                  <Flame className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  행사장 내 난로 및 온열 의자 설치
                </li>
                <li className="flex items-start gap-2">
                  <Flame className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  화재 예방: 소방차 대기, LED 조명 사용
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* ESG */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-6">
            <Leaf className="w-6 h-6 text-emerald-400" />
            <h4 className="text-xl font-bold">ESG (Environment, Social, Governance)</h4>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* 친환경 */}
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Recycle className="w-6 h-6 text-emerald-400" />
                <h5 className="font-bold text-emerald-400">친환경(E)</h5>
              </div>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  축제장 내 일회용품 사용 제한
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  다회용기 대여 시스템 도입
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  &apos;쓰레기 없는 축제(Zero Waste Festival)&apos; 캠페인
                </li>
              </ul>
            </div>

            {/* 상생 */}
            <div className="bg-pink-500/10 border border-pink-500/30 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-pink-400" />
                <h5 className="font-bold text-pink-400">상생(S)</h5>
              </div>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">•</span>
                  지역 주민, 청년 상인에게 푸드트럭 및 마켓 입점 우선권 부여
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">•</span>
                  수익금의 일부를 지역 발전 기금으로 기부
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* 푸터 */}
      <footer className="py-8 px-4 bg-gray-950 border-t border-gray-800">
        <div className="max-w-5xl mx-auto text-center text-gray-500 text-sm">
          <p className="font-bold text-white mb-2">2026 속리산축제 콘텐츠 공모전 제안서</p>
          <p>제4장: 인프라 구축 및 운영 로드맵</p>
        </div>
      </footer>
    </main>
  );
}
