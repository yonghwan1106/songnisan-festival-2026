"use client";

import { motion } from "framer-motion";
import { PageHeader, Section } from "@/components";
import {
  Calculator,
  Sun,
  Snowflake,
  PieChart,
  Users,
  Building2,
  Calendar,
} from "lucide-react";

export default function FeasibilityPage() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <PageHeader
        icon={Calculator}
        iconColor="text-cyan-400"
        tag="제5장"
        tagColor="bg-cyan-500/20 text-cyan-400"
        title="실현가능성"
        subtitle="세부 예산안 및 운영 계획"
        gradientFrom="from-gray-900"
        gradientVia="via-cyan-950/30"
        gradientTo="to-gray-900"
      />

      {/* 대표 이미지 */}
      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-xl overflow-hidden mb-4">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800"
              alt="예산 계획"
              className="w-full h-48 object-cover"
            />
            <p className="text-xs text-gray-500 mt-2 text-center">예산 및 실현가능성 분석 | 출처: Unsplash</p>
          </div>
        </div>
      </section>

      {/* 예산 총괄 */}
      <section className="py-8 px-4 bg-gray-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-3 gap-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-orange-500/20 border border-orange-500/30 rounded-xl p-6"
            >
              <Sun className="w-8 h-8 text-orange-400 mx-auto mb-2" />
              <p className="text-3xl font-bold text-orange-400">8억</p>
              <p className="text-sm text-gray-400">여름 축제</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-6"
            >
              <Snowflake className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <p className="text-3xl font-bold text-blue-400">10억</p>
              <p className="text-sm text-gray-400">겨울 축제</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-emerald-500/20 border border-emerald-500/30 rounded-xl p-6"
            >
              <Calculator className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
              <p className="text-3xl font-bold text-emerald-400">18억</p>
              <p className="text-sm text-gray-400">총 예산</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5.1 여름 축제 예산 */}
      <Section title="5.1 여름 축제 예산안 (총 8억 원)">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-orange-500/20">
                <th className="p-4 text-left border border-gray-700">항목</th>
                <th className="p-4 text-left border border-gray-700">세부 내역</th>
                <th className="p-4 text-right border border-gray-700">금액(백만원)</th>
                <th className="p-4 text-right border border-gray-700">비율</th>
              </tr>
            </thead>
            <tbody>
              {[
                { item: "인건비", detail: "연기자(도깨비/귀신 30명×16일), 안전요원, 진행요원", amount: 150, percent: 19 },
                { item: "시설비", detail: "조명(LED), 음향장비, 스피커, 워터밤 시설, 쿨링포그", amount: 200, percent: 25 },
                { item: "콘텐츠 제작비", detail: "시나리오 개발, 소품 제작, 의상, AR 앱 개발", amount: 120, percent: 15 },
                { item: "홍보·마케팅비", detail: "SNS 광고, 인플루언서 섭외, 영상 제작, 포스터", amount: 100, percent: 13 },
                { item: "운영비", detail: "셔틀버스 운영, 안내 부스, 티켓 시스템", amount: 80, percent: 10 },
                { item: "안전관리비", detail: "의료진 대기, 안전장비, 보험료", amount: 50, percent: 6 },
                { item: "예비비", detail: "긴급 상황 대응 (10%)", amount: 100, percent: 12 },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-800/50 transition-colors">
                  <td className="p-4 border border-gray-700 font-medium">{row.item}</td>
                  <td className="p-4 border border-gray-700 text-sm text-gray-400">{row.detail}</td>
                  <td className="p-4 border border-gray-700 text-right text-orange-400 font-bold">{row.amount}</td>
                  <td className="p-4 border border-gray-700 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${row.percent}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 }}
                          className="h-full bg-orange-500 rounded-full"
                        />
                      </div>
                      <span className="text-sm">{row.percent}%</span>
                    </div>
                  </td>
                </tr>
              ))}
              <tr className="bg-orange-500/10">
                <td className="p-4 border border-gray-700 font-bold" colSpan={2}>합계</td>
                <td className="p-4 border border-gray-700 text-right text-orange-400 font-bold text-xl">800</td>
                <td className="p-4 border border-gray-700 text-right font-bold">100%</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </Section>

      {/* 5.2 겨울 축제 예산 */}
      <Section
        title="5.2 겨울 축제 예산안 (총 10억 원)"
        className="bg-gradient-to-b from-gray-900 via-blue-950/20 to-gray-900"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-500/20">
                <th className="p-4 text-left border border-gray-700">항목</th>
                <th className="p-4 text-left border border-gray-700">세부 내역</th>
                <th className="p-4 text-right border border-gray-700">금액(백만원)</th>
                <th className="p-4 text-right border border-gray-700">비율</th>
              </tr>
            </thead>
            <tbody>
              {[
                { item: "미디어아트 제작비", detail: "프로젝션 매핑 콘텐츠 제작, 장비 임대", amount: 300, percent: 30 },
                { item: "조명·시설비", detail: "소원등 1만개, LED 연꽃, 빛 터널, 돔텐트", amount: 250, percent: 25 },
                { item: "인건비", detail: "기술진, 안전요원, 진행요원", amount: 100, percent: 10 },
                { item: "콘텐츠 제작비", detail: "소원등 키트, 체험 부스 운영", amount: 80, percent: 8 },
                { item: "홍보·마케팅비", detail: "SNS 광고, 인플루언서, 영상 제작", amount: 100, percent: 10 },
                { item: "운영비", detail: "셔틀버스, 안내 부스, 난방시설", amount: 70, percent: 7 },
                { item: "안전관리비", detail: "의료진, 소방 대기, 보험료", amount: 50, percent: 5 },
                { item: "예비비", detail: "기상 악화 대응 (5%)", amount: 50, percent: 5 },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-800/50 transition-colors">
                  <td className="p-4 border border-gray-700 font-medium">{row.item}</td>
                  <td className="p-4 border border-gray-700 text-sm text-gray-400">{row.detail}</td>
                  <td className="p-4 border border-gray-700 text-right text-blue-400 font-bold">{row.amount}</td>
                  <td className="p-4 border border-gray-700 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${row.percent}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 }}
                          className="h-full bg-blue-500 rounded-full"
                        />
                      </div>
                      <span className="text-sm">{row.percent}%</span>
                    </div>
                  </td>
                </tr>
              ))}
              <tr className="bg-blue-500/10">
                <td className="p-4 border border-gray-700 font-bold" colSpan={2}>합계</td>
                <td className="p-4 border border-gray-700 text-right text-blue-400 font-bold text-xl">1,000</td>
                <td className="p-4 border border-gray-700 text-right font-bold">100%</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </Section>

      {/* 5.3 재원 조달 */}
      <Section title="5.3 재원 조달 계획">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <PieChart className="w-6 h-6 text-emerald-400" />
              <h4 className="text-xl font-bold">총 18억 원 조달 계획</h4>
            </div>
            <div className="space-y-4">
              {[
                { source: "보은군 예산", amount: 600, percent: 33, color: "emerald" },
                { source: "충청북도 보조금", amount: 400, percent: 22, color: "blue" },
                { source: "문화체육관광부/문화재청 국비", amount: 500, percent: 28, color: "purple" },
                { source: "기업 협찬 (SK, KT 등)", amount: 200, percent: 11, color: "orange" },
                { source: "입장료 및 체험비 수익", amount: 100, percent: 6, color: "pink" },
              ].map((item) => {
                const colorClasses: Record<string, string> = {
                  emerald: "bg-emerald-500",
                  blue: "bg-blue-500",
                  purple: "bg-purple-500",
                  orange: "bg-orange-500",
                  pink: "bg-pink-500",
                };
                const textColor: Record<string, string> = {
                  emerald: "text-emerald-400",
                  blue: "text-blue-400",
                  purple: "text-purple-400",
                  orange: "text-orange-400",
                  pink: "text-pink-400",
                };
                return (
                  <div key={item.source}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{item.source}</span>
                      <span className={textColor[item.color]}>{item.amount}백만원 ({item.percent}%)</span>
                    </div>
                    <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={`h-full rounded-full ${colorClasses[item.color]}`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* 5.4 운영 조직도 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Users className="w-6 h-6 text-cyan-400" />
              <h4 className="text-xl font-bold">운영 조직도</h4>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6">
              {/* 추진위원회 */}
              <div className="text-center mb-6">
                <div className="inline-block bg-cyan-500/20 border border-cyan-500 rounded-xl px-6 py-3">
                  <p className="font-bold text-cyan-400">속리산축제 추진위원회</p>
                  <p className="text-xs text-gray-400">(위원장: 군수)</p>
                </div>
              </div>

              {/* 화살표 */}
              <div className="flex justify-center mb-6">
                <div className="w-0.5 h-8 bg-gray-600"></div>
              </div>

              {/* 3개 팀 */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { name: "기획총괄팀", tasks: ["콘텐츠 기획", "예산 관리", "협력기관 조율"], color: "emerald" },
                  { name: "운영지원팀", tasks: ["현장 운영", "안전 관리", "시설 관리"], color: "blue" },
                  { name: "홍보마케팅팀", tasks: ["온라인 홍보", "언론 대응", "SNS 운영"], color: "purple" },
                ].map((team) => {
                  const borderColor: Record<string, string> = {
                    emerald: "border-emerald-500/50",
                    blue: "border-blue-500/50",
                    purple: "border-purple-500/50",
                  };
                  const textColor: Record<string, string> = {
                    emerald: "text-emerald-400",
                    blue: "text-blue-400",
                    purple: "text-purple-400",
                  };
                  return (
                    <div key={team.name} className={`border rounded-lg p-3 ${borderColor[team.color]}`}>
                      <p className={`font-bold text-sm mb-2 ${textColor[team.color]}`}>{team.name}</p>
                      <ul className="text-xs text-gray-400 space-y-1">
                        {team.tasks.map((task) => (
                          <li key={task}>• {task}</li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* 5.5 협력 기관 */}
      <Section
        title="5.5 협력 기관"
        className="bg-gradient-to-b from-gray-900 via-emerald-950/20 to-gray-900"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-emerald-500/20">
                <th className="p-4 text-left border border-gray-700">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-emerald-400" />
                    기관
                  </div>
                </th>
                <th className="p-4 text-left border border-gray-700">협력 내용</th>
              </tr>
            </thead>
            <tbody>
              {[
                { org: "국립공원공단 속리산사무소", content: "야간 탐방로 개방 협의, 안전 관리" },
                { org: "문화재청", content: "법주사 미디어아트 협의, 문화재 보존" },
                { org: "충청북도", content: "광역 홍보, 예산 지원" },
                { org: "보은군청 문화관광과", content: "총괄 기획, 지역 상권 연계" },
                { org: "보은경찰서/소방서", content: "안전 및 질서 유지" },
                { org: "지역 숙박업협회", content: "숙박 패키지 개발" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-800/50 transition-colors">
                  <td className="p-4 border border-gray-700 font-medium">{row.org}</td>
                  <td className="p-4 border border-gray-700 text-gray-400">{row.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </Section>

      {/* 5.6 추진 일정표 */}
      <Section title="5.6 추진 일정표">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-6">
            <Calendar className="w-6 h-6 text-purple-400" />
            <h4 className="text-xl font-bold">2025.12 ~ 2027.1</h4>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-purple-500/30" />
            {[
              { date: "2025년 12월", text: "공모전 당선 후 본격 기획 착수", highlight: false },
              { date: "2026년 1~2월", text: "국립공원공단, 문화재청 협의", highlight: false },
              { date: "2026년 3~4월", text: "콘텐츠 상세 기획, 예산 확정", highlight: false },
              { date: "2026년 5월", text: "시설물 설치, 리허설, 홍보 시작", highlight: false },
              { date: "2026년 6월 27일~7월 12일", text: "여름 축제 개최", highlight: true, color: "orange" },
              { date: "2026년 7~8월", text: "여름 축제 평가, 겨울 축제 준비", highlight: false },
              { date: "2026년 9~11월", text: "미디어아트 제작, 조명 설치", highlight: false },
              { date: "2026년 12월 19일~2027년 1월 3일", text: "겨울 축제 개최", highlight: true, color: "blue" },
              { date: "2027년 1월", text: "종합 평가 및 차년도 개선안 수립", highlight: false },
            ].map((item, i) => {
              const highlightColor = item.color === "orange" ? "bg-orange-500" : item.color === "blue" ? "bg-blue-500" : "";
              const borderColor = item.color === "orange" ? "border-orange-500 bg-orange-500/20" : item.color === "blue" ? "border-blue-500 bg-blue-500/20" : "";
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-4 mb-4"
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                      item.highlight ? highlightColor : "bg-gray-700"
                    }`}
                  >
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div
                    className={`flex-1 p-3 rounded-lg ${
                      item.highlight ? `border ${borderColor}` : "bg-gray-800"
                    }`}
                  >
                    <span className="text-sm text-gray-400">{item.date}</span>
                    <p className={item.highlight ? (item.color === "orange" ? "text-orange-400" : "text-blue-400") + " font-medium" : ""}>
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Section>

      {/* 푸터 */}
      <footer className="py-8 px-4 bg-gray-950 border-t border-gray-800">
        <div className="max-w-5xl mx-auto text-center text-gray-500 text-sm">
          <p className="font-bold text-white mb-2">2026 속리산축제 콘텐츠 공모전 제안서</p>
          <p>제5장: 실현가능성 - 세부 예산안 및 운영 계획</p>
        </div>
      </footer>
    </main>
  );
}
