"use client";

import { motion } from "framer-motion";
import { PageHeader, Section } from "@/components";
import {
  TrendingUp,
  Users,
  Wallet,
  Target,
  Lightbulb,
  CheckCircle,
  Sun,
  Snowflake,
  BookOpen,
  ExternalLink,
} from "lucide-react";

export default function ImpactPage() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <PageHeader
        icon={TrendingUp}
        iconColor="text-yellow-400"
        tag="제7장"
        tagColor="bg-yellow-500/20 text-yellow-400"
        title="기대효과 & 결론"
        subtitle="경제효과 196억 원, 심사기준 대응표"
        gradientFrom="from-gray-900"
        gradientVia="via-yellow-950/30"
        gradientTo="to-gray-900"
      />

      {/* 핵심 숫자 */}
      <section className="py-12 px-4 bg-gray-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "14.4", unit: "만명", label: "총 방문객", color: "emerald" },
              { value: "78.4", unit: "억원", label: "직접 경제효과", color: "blue" },
              { value: "117.6", unit: "억원", label: "간접 경제효과", color: "purple" },
              { value: "196", unit: "억원", label: "총 경제효과", color: "yellow" },
            ].map((item, i) => {
              const colorClasses: Record<string, string> = {
                emerald: "text-emerald-400",
                blue: "text-blue-400",
                purple: "text-purple-400",
                yellow: "text-yellow-400",
              };
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-800 rounded-2xl p-6 text-center"
                >
                  <div className={`text-3xl md:text-4xl font-bold ${colorClasses[item.color]} mb-1`}>
                    {item.value}
                    <span className="text-lg">{item.unit}</span>
                  </div>
                  <div className="text-gray-400">{item.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6.3 예상 방문객 및 경제 효과 */}
      <Section title="예상 방문객 및 경제 효과">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-yellow-500/20">
                <th className="p-4 text-left border border-gray-700">구분</th>
                <th className="p-4 text-center border border-gray-700">
                  <div className="flex items-center justify-center gap-2">
                    <Sun className="w-5 h-5 text-orange-400" />
                    <span className="text-orange-400">여름 축제</span>
                  </div>
                </th>
                <th className="p-4 text-center border border-gray-700">
                  <div className="flex items-center justify-center gap-2">
                    <Snowflake className="w-5 h-5 text-blue-400" />
                    <span className="text-blue-400">겨울 축제</span>
                  </div>
                </th>
                <th className="p-4 text-center border border-gray-700 text-yellow-400">합계</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "기간", summer: "16일", winter: "16일", total: "32일" },
                { label: "일 평균 방문객", summer: "5,000명", winter: "4,000명", total: "-" },
                { label: "총 방문객", summer: "80,000명", winter: "64,000명", total: "144,000명", highlight: true },
                { label: "1인 평균 지출", summer: "50,000원", winter: "60,000원", total: "-" },
                { label: "직접 경제효과", summer: "40억 원", winter: "38.4억 원", total: "78.4억 원" },
                { label: "간접 경제효과 (1.5배)", summer: "60억 원", winter: "57.6억 원", total: "117.6억 원" },
                { label: "총 경제효과", summer: "100억 원", winter: "96억 원", total: "196억 원", highlight: true },
              ].map((row, i) => (
                <tr key={i} className={`hover:bg-gray-800/50 transition-colors ${row.highlight ? "bg-yellow-500/10" : ""}`}>
                  <td className="p-4 border border-gray-700 font-medium">{row.label}</td>
                  <td className="p-4 border border-gray-700 text-center text-orange-400">{row.summer}</td>
                  <td className="p-4 border border-gray-700 text-center text-blue-400">{row.winter}</td>
                  <td className={`p-4 border border-gray-700 text-center ${row.highlight ? "text-yellow-400 font-bold text-lg" : ""}`}>{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </Section>

      {/* 7. 결론 */}
      <Section
        title="7. 결론 및 정책 제언"
        subtitle="2026년을 '사계절 365일 설레는 보은 관광'의 원년으로"
        className="bg-gradient-to-b from-gray-900 via-emerald-950/20 to-gray-900"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-8 mb-12"
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            2026년 속리산축제 콘텐츠 공모전은 보은군 관광의 미래를 결정짓는 중요한 분기점이다.
            본 보고서에서 제안한 여름의 <strong className="text-orange-400">&apos;속리산 야행(호러/물놀이)&apos;</strong>과
            겨울의 <strong className="text-blue-400">&apos;속리산 겨울연화(빛/미디어아트)&apos;</strong>는
            단순히 계절의 공백을 메우는 것을 넘어, 보은군이 가진 고유한 자원을 현대적 트렌드에 맞게 재해석한 결과물이다.
          </p>
        </motion.div>

        {/* 전략적 시사점 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-6">
            <Lightbulb className="w-6 h-6 text-yellow-400" />
            <h4 className="text-xl font-bold">전략적 시사점 요약</h4>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "1",
                title: "스토리텔링의 힘",
                desc: "도깨비와 세조라는 역사·설화적 인물을 축제의 주인공으로 내세워 단순 관람이 아닌 '이야기 체험' 제공",
                color: "orange",
              },
              {
                num: "2",
                title: "야간 관광 선점",
                desc: "여름과 겨울 모두 '밤'을 공략함으로써 체류형 관광지로의 전환을 가속화",
                color: "purple",
              },
              {
                num: "3",
                title: "기후 적응형 콘텐츠",
                desc: "기후 위기에 취약한 얼음/눈 의존도를 낮추고, 기술(Tech)과 빛(Light)을 활용한 지속 가능한 콘텐츠",
                color: "blue",
              },
            ].map((item, i) => {
              const colorClasses: Record<string, string> = {
                orange: "bg-orange-500/20 border-orange-500 text-orange-400",
                purple: "bg-purple-500/20 border-purple-500 text-purple-400",
                blue: "bg-blue-500/20 border-blue-500 text-blue-400",
              };
              return (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`border rounded-xl p-6 ${colorClasses[item.color]}`}
                >
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center font-bold text-lg mb-4">
                    {item.num}
                  </div>
                  <h5 className="font-bold text-white mb-2">{item.title}</h5>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Section>

      {/* 심사기준 대응표 */}
      <Section title="심사기준 대응표">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-8"
        >
          <div className="flex items-center gap-2 mb-6">
            <Target className="w-6 h-6 text-emerald-400" />
            <h4 className="text-xl font-bold text-emerald-400">공모전 심사기준 완벽 대응</h4>
          </div>
          <div className="space-y-6">
            {[
              {
                criteria: "독창성",
                response: "국립공원 최초 호러 트레킹, 도깨비 IP 활용, 유네스코 유산 미디어아트",
                section: "제2장, 제3장",
              },
              {
                criteria: "실현가능성",
                response: "세부 예산안(18억), 협력기관 명시, 구체적 일정표, 운영 조직도",
                section: "제5장",
              },
              {
                criteria: "관광객 매력도",
                response: "타겟별 맞춤 콘텐츠, SNS 바이럴 전략, 예상 196억 경제효과",
                section: "제6장, 제7장",
              },
            ].map((item, i) => (
              <motion.div
                key={item.criteria}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col md:flex-row md:items-center gap-4 p-4 bg-gray-800/50 rounded-xl"
              >
                <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold w-fit">
                  {item.criteria}
                </span>
                <p className="flex-1 text-gray-300">{item.response}</p>
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  {item.section}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* 부록: 유사 축제 비교 */}
      <Section
        title="부록: 유사 축제 예산 및 운영 현황 비교"
        className="bg-gradient-to-b from-gray-900 via-purple-950/20 to-gray-900"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto mb-12"
        >
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-purple-500/20">
                <th className="p-3 text-left border border-gray-700">축제명</th>
                <th className="p-3 text-left border border-gray-700">주요 콘텐츠</th>
                <th className="p-3 text-left border border-gray-700">예산 규모</th>
                <th className="p-3 text-left border border-gray-700">입장료</th>
                <th className="p-3 text-left border border-gray-700 text-emerald-400">시사점</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "화천 산천어축제",
                  content: "얼음낚시, 맨손잡기",
                  budget: "약 40억 원",
                  fee: "15,000원 (상품권 환급)",
                  implication: "지역 상품권 환급으로 지역 상권 환류",
                },
                {
                  name: "합천 고스트파크",
                  content: "호러 어트랙션",
                  budget: "약 15억 원",
                  fee: "성인 30,000원",
                  implication: "확실한 킬러 콘텐츠로 고가 유료화 성공",
                },
                {
                  name: "수원 화성 미디어아트",
                  content: "문화유산 미디어아트",
                  budget: "국비+지방비 약 20억",
                  fee: "무료/일부 유료",
                  implication: "국비 공모 사업 적극 활용",
                },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-800/50 transition-colors">
                  <td className="p-3 border border-gray-700 font-medium">{row.name}</td>
                  <td className="p-3 border border-gray-700 text-gray-400">{row.content}</td>
                  <td className="p-3 border border-gray-700 text-gray-400">{row.budget}</td>
                  <td className="p-3 border border-gray-700 text-gray-400">{row.fee}</td>
                  <td className="p-3 border border-gray-700 text-emerald-400">{row.implication}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* 차별화 포인트 비교 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto mb-12"
        >
          <h4 className="text-xl font-bold mb-6">차별화 포인트 비교표</h4>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-emerald-500/20">
                <th className="p-4 text-left border border-gray-700">비교 항목</th>
                <th className="p-4 text-center border border-gray-700 text-emerald-400">속리산 축제 (제안)</th>
                <th className="p-4 text-center border border-gray-700 text-gray-400">합천 고스트파크</th>
                <th className="p-4 text-center border border-gray-700 text-gray-400">화천 산천어축제</th>
              </tr>
            </thead>
            <tbody>
              {[
                { item: "공간", ours: "실제 국립공원 숲", comp1: "영화 세트장", comp2: "하천 빙판" },
                { item: "기후 의존도", ours: "낮음 (빛/스토리 중심)", comp1: "낮음", comp2: "높음 (결빙 필수)" },
                { item: "스토리텔링", ours: "도깨비/세조 설화", comp1: "영화 기반", comp2: "없음" },
                { item: "문화유산 연계", ours: "유네스코 법주사", comp1: "없음", comp2: "없음" },
                { item: "MZ 타겟팅", ours: "AR, SNS 챌린지", comp1: "공포 체험", comp2: "체험 위주" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-800/50 transition-colors">
                  <td className="p-4 border border-gray-700 font-medium">{row.item}</td>
                  <td className="p-4 border border-gray-700 text-center text-emerald-400 font-medium">{row.ours}</td>
                  <td className="p-4 border border-gray-700 text-center text-gray-500">{row.comp1}</td>
                  <td className="p-4 border border-gray-700 text-center text-gray-500">{row.comp2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* 도깨비 IP 확장 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl font-bold mb-6">도깨비 IP 확장 가능성</h4>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { title: "캐릭터 굿즈", items: ["도깨비 인형", "도깨비방망이 키링", "대추나무 부적"] },
              { title: "F&B 브랜딩", items: ["도깨비 팥죽", "메밀묵 세트", "대추 막걸리"] },
              { title: "콘텐츠 확장", items: ["웹툰 콜라보", "애니메이션", "게임 콜라보"] },
              { title: "연간 활용", items: ["할로윈 특별 이벤트", "시즌 한정 상품", "지역 페스티벌"] },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4"
              >
                <h5 className="font-bold text-orange-400 mb-3">{item.title}</h5>
                <ul className="text-sm text-gray-400 space-y-1">
                  {item.items.map((it) => (
                    <li key={it} className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-orange-400" />
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* 마무리 CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 via-emerald-950/30 to-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-3xl md:text-4xl font-bold mb-6 leading-relaxed">
              &quot;2026년을 사계절 365일
              <br />
              <span className="text-emerald-400">설레는 보은 관광</span>의 원년으로!&quot;
            </p>
            <p className="text-gray-400 mb-8">
              2026 속리산축제 콘텐츠 공모전 제안서<br/>
              기후 위기 시대, 신화와 자연의 재해석을 통한 사계절 체류형 관광 허브 구축 전략
            </p>
          </motion.div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="py-8 px-4 bg-gray-950 border-t border-gray-800">
        <div className="max-w-5xl mx-auto text-center text-gray-500 text-sm">
          <p className="font-bold text-white mb-2">2026 속리산축제 콘텐츠 공모전 제안서</p>
          <p>제7장: 기대효과 & 결론 | 부록: 세부 데이터 및 참고 자료</p>
        </div>
      </footer>
    </main>
  );
}
