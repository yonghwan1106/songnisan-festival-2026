"use client";

import { motion } from "framer-motion";
import { PageHeader, Section } from "@/components";
import {
  BookOpen,
  AlertTriangle,
  TreePine,
  Mountain,
  Droplets,
  ScrollText,
  Landmark,
  CheckCircle,
  X,
} from "lucide-react";

export default function BackgroundPage() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <PageHeader
        icon={BookOpen}
        iconColor="text-emerald-400"
        tag="제1장"
        tagColor="bg-emerald-500/20 text-emerald-400"
        title="서론: 보은 관광의 패러다임 전환"
        subtitle="계절성 극복의 필연성과 시공간적 확장 전략"
      />

      {/* 1.1 연구의 배경 및 목적 */}
      <Section title="1.1 연구의 배경 및 목적" subtitle="계절성 극복의 필연성">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* 현재 상황 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-400" />
              <h3 className="text-xl font-bold text-red-400">현재 문제점</h3>
            </div>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">봄·가을 축제 편중</p>
                  <p className="text-sm text-gray-400">봄 신화여행축제, 가을 대추축제에 과도하게 집중</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">여름·겨울 비수기</p>
                  <p className="text-sm text-gray-400">지역 숙박업·요식업 매출 절벽, 관광 인프라 가동률 저하</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">기후 변화 위협</p>
                  <p className="text-sm text-gray-400">전통 겨울 축제(얼음 낚시 등) 콘텐츠 위기</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* 해결책 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-6 h-6 text-emerald-400" />
              <h3 className="text-xl font-bold text-emerald-400">본 제안의 해결책</h3>
            </div>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">여름: Cool & Horror</p>
                  <p className="text-sm text-gray-400">자연의 냉기 + 심리적 냉기(공포)로 무더위 극복</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">겨울: Light & Silence</p>
                  <p className="text-sm text-gray-400">빛과 문화유산 중심의 기후 독립형 콘텐츠</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">이머시브 축제</p>
                  <p className="text-sm text-gray-400">참가자가 이야기의 주인공이 되는 체험형 콘텐츠</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* 본문 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-800/50 rounded-2xl p-6 text-gray-300 leading-relaxed"
        >
          <p className="mb-4">
            충청북도 보은군은 <strong className="text-emerald-400">속리산 국립공원</strong>이라는 거대한 생태 자원과
            <strong className="text-blue-400"> 유네스코 세계문화유산인 법주사</strong>를 보유한 대한민국 중부권의 대표적인 관광 거점이다.
          </p>
          <p className="mb-4">
            그러나 현재 보은군의 관광 산업 구조는 특정 시기, 즉 봄철의 &apos;속리산 신화여행축제&apos;와 가을철의
            &apos;보은대추축제&apos;에 과도하게 편중된 양상을 보이고 있다. 특히 보은대추축제는 &apos;대추는 달콤, 보은은 웰컴&apos;이라는
            슬로건 하에 농특산물 판매와 지역 경제 활성화에 크게 기여하고 있으나, 이는 수확기인 가을에 집중될 수밖에 없는 태생적 한계를 지닌다.
          </p>
          <p>
            관광학적 관점에서 볼 때, 이러한 <strong className="text-red-400">&apos;계절성(Seasonality)&apos;</strong>은
            관광지의 지속 가능성을 저해하는 주요 요인이다. 보은군이 가진 천혜의 산림 자원과 풍부한 설화 콘텐츠를 활용하여
            여름과 겨울을 아우르는 새로운 관광 모멘텀을 창출하는 것은 선택이 아닌 <strong className="text-emerald-400">생존을 위한 필수 과제</strong>이다.
          </p>
        </motion.div>

        {/* 법주사 이미지 갤러리 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-4 mt-8"
        >
          <div className="rounded-xl overflow-hidden">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Palsangjeon_at_Beopjusa_%EB%B2%95%EC%A3%BC%EC%82%AC_%ED%8C%94%EC%83%81%EC%A0%84_%E6%B3%95%E4%BD%8F%E5%AF%BA_%E6%8D%8C%E7%9B%B8%E6%AE%BF_%285341676993%29.jpg/800px-Palsangjeon_at_Beopjusa_%EB%B2%95%EC%A3%BC%EC%82%AC_%ED%8C%94%EC%83%81%EC%A0%84_%E6%B3%95%E4%BD%8F%E5%AF%BA_%E6%8D%8C%E7%9B%B8%E6%AE%BF_%285341676993%29.jpg"
              alt="법주사 팔상전 (국보 제55호)"
              className="w-full h-48 object-cover"
            />
            <p className="text-xs text-gray-500 mt-2 text-center">법주사 팔상전 - 국내 유일의 목탑 (국보 제55호) | 출처: Wikimedia Commons</p>
          </div>
          <div className="rounded-xl overflow-hidden">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Maitreya_at_Beopjusa_%EB%B2%95%EC%A3%BC%EC%82%AC_%EB%AF%B8%EB%A5%B5%EB%B6%88_%E6%B3%95%E4%BD%8F%E5%AF%BA_%285341677343%29.jpg/800px-Maitreya_at_Beopjusa_%EB%B2%95%EC%A3%BC%EC%82%AC_%EB%AF%B8%EB%A5%B5%EB%B6%88_%E6%B3%95%E4%BD%8F%E5%AF%BA_%285341677343%29.jpg"
              alt="법주사 금동미륵대불"
              className="w-full h-48 object-cover"
            />
            <p className="text-xs text-gray-500 mt-2 text-center">법주사 금동미륵대불 (33m) | 출처: Wikimedia Commons</p>
          </div>
        </motion.div>
      </Section>

      {/* 1.2 보은군 관광 자원 분석 */}
      <Section
        title="1.2 보은군 관광 자원의 심층 분석"
        subtitle="자연 생태 자원과 인문학적 자원의 재해석"
        className="bg-gradient-to-b from-gray-900 via-emerald-950/20 to-gray-900"
      >
        {/* 자연 생태 자원 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <TreePine className="w-6 h-6 text-emerald-400" />
            자연 생태 자원
          </h3>

          {/* 속리산 자연 이미지 */}
          <div className="rounded-xl overflow-hidden mb-6">
            <img
              src="https://images.unsplash.com/photo-1609171150381-6f371e1fb47e?w=1200"
              alt="한국 전통 사찰과 자연"
              className="w-full h-48 object-cover"
            />
            <p className="text-xs text-gray-500 mt-2 text-center">한국의 산사 풍경 | 출처: Unsplash</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Mountain,
                title: "오리숲과 세조길",
                desc: "법주사 입구의 전나무·소나무 터널. 남녀노소 누구나 걷기 좋은 무장애 탐방로. 조선 7대 임금 세조가 요양차 방문했던 역사적 길.",
                features: ["평탄한 길", "역사적 스토리", "야간 트레킹 최적지"],
              },
              {
                icon: Droplets,
                title: "수자원 (계곡 및 저수지)",
                desc: "서원계곡과 만수계곡은 여름철 피서지로 유명. 삼가저수지와 비룡저수지는 수변 경관이 뛰어나 겨울철 빙상 축제나 수변 산책로로 활용 가능.",
                features: ["피서지", "수변 경관", "빙상 축제 가능"],
              },
              {
                icon: Mountain,
                title: "말티재와 솔향공원",
                desc: "12굽이의 말티재 꼬부랑길과 전망대는 보은의 랜드마크. 야간 경관 조명과 결합될 때 강력한 시각적 임팩트 제공.",
                features: ["12굽이 드라이브", "전망대", "야간 경관"],
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6"
              >
                <item.icon className="w-8 h-8 text-emerald-400 mb-4" />
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400 mb-4">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 인문학적 자원 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <ScrollText className="w-6 h-6 text-purple-400" />
            인문학적 자원: 설화와 역사의 현대적 변용
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* 도깨비 설화 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6"
            >
              <div className="text-4xl mb-4">👹</div>
              <h4 className="text-xl font-bold text-orange-400 mb-2">도깨비 설화</h4>
              <p className="text-gray-300 mb-4">
                한국의 도깨비는 악귀가 아니라 인간에게 부를 가져다주거나 씨름을 청하는 해학적인 존재.
                보은 지역의 도깨비 전설을 현대적인 캐릭터나 호러 콘텐츠로 재가공하면 &apos;한국형 판타지&apos;를 선호하는 젊은 층에게 강력한 소구력 발휘.
              </p>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-2">F&B 콘텐츠 개발 단초</p>
                <ul className="text-sm space-y-1">
                  <li>• 도깨비가 팥죽, 붉은색을 싫어함 → &apos;액운 타파&apos; 팥죽 메뉴</li>
                  <li>• 메밀묵을 좋아함 → 도깨비 메밀묵 세트</li>
                </ul>
              </div>
            </motion.div>

            {/* 법주사와 세조 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6"
            >
              <div className="text-4xl mb-4">🏛️</div>
              <h4 className="text-xl font-bold text-blue-400 mb-2">법주사와 세조</h4>
              <p className="text-gray-300 mb-4">
                유네스코 세계유산인 법주사의 팔상전(국보 제55호)과 쌍사자 석등은 그 자체로 미적 가치가 뛰어남.
                세조가 피부병을 치료하기 위해 속리산을 찾았다는 &apos;치유&apos;의 서사는 현대인의 멘탈 헬스 케어 트렌드와 정확히 부합.
              </p>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-2">활용 가능 콘텐츠</p>
                <ul className="text-sm space-y-1">
                  <li>• 팔상전: 프로젝션 매핑 스크린</li>
                  <li>• 세조의 목욕소: 힐링 로드 코스</li>
                  <li>• 치유 서사: 명상·힐링 프로그램</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Section>

      {/* 1.3 경쟁 축제 분석 */}
      <Section title="1.3 경쟁 축제 분석 및 벤치마킹" subtitle="국내외 유사 축제의 성공과 실패 사례 분석">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-emerald-500/20">
                <th className="p-4 text-left border border-gray-700">구분</th>
                <th className="p-4 text-left border border-gray-700">주요 사례</th>
                <th className="p-4 text-left border border-gray-700">성공/실패 요인</th>
                <th className="p-4 text-left border border-gray-700 text-emerald-400">보은군 적용 시사점</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  category: "겨울 축제",
                  example: "화천 산천어축제",
                  factors: (
                    <>
                      <p className="text-emerald-400 mb-1">성공: 얼음낚시라는 확실한 킬러 콘텐츠, 체계적 운영</p>
                      <p className="text-red-400">한계: 기후 온난화로 결빙 불확실성, 동물권 이슈</p>
                    </>
                  ),
                  implication: "얼음에 의존하지 않는 '빛'과 '문화유산' 중심의 콘텐츠 개발. 법주사 미디어아트가 대안.",
                },
                {
                  category: "여름 호러",
                  example: "합천 고스트파크",
                  factors: (
                    <>
                      <p className="text-emerald-400 mb-1">성공: 영상테마파크 세트장 활용, 젊은 층 팬덤 형성</p>
                      <p className="text-gray-400">특징: 고가 입장료에도 매진 행렬</p>
                    </>
                  ),
                  implication: "인위적 세트장이 아닌 '실제 숲(오리숲)'의 원초적 공포감. 시설물 최소화하는 '스토리텔링형 호러' 지향.",
                },
                {
                  category: "야간 관광",
                  example: "수원 화성 미디어아트, 진주 남강유등축제",
                  factors: (
                    <>
                      <p className="text-emerald-400">성공: 문화유산의 야간 경관화, 체류 시간 증대 및 지역 상권 활성화</p>
                    </>
                  ),
                  implication: "법주사 팔상전 및 세조길에 야간 경관 조명 설치. '문화재 야행' 트렌드 반영으로 체류형 관광 유도.",
                },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-800/50 transition-colors">
                  <td className="p-4 border border-gray-700 font-medium">{row.category}</td>
                  <td className="p-4 border border-gray-700">{row.example}</td>
                  <td className="p-4 border border-gray-700">{row.factors}</td>
                  <td className="p-4 border border-gray-700 text-emerald-400">{row.implication}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* 핵심 인사이트 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
            <Landmark className="w-6 h-6" />
            핵심 인사이트
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "기후 독립성",
                desc: "얼음/눈에 의존하지 않는 콘텐츠로 기후 리스크 최소화",
              },
              {
                title: "문화유산 활용",
                desc: "유네스코 세계유산 법주사를 활용한 차별화된 품격",
              },
              {
                title: "스토리텔링",
                desc: "도깨비 설화와 세조 역사를 현대적으로 재해석한 몰입 경험",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-emerald-400 font-bold">{i + 1}</span>
                </div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* 푸터 */}
      <footer className="py-8 px-4 bg-gray-950 border-t border-gray-800">
        <div className="max-w-5xl mx-auto text-center text-gray-500 text-sm">
          <p className="font-bold text-white mb-2">2026 속리산축제 콘텐츠 공모전 제안서</p>
          <p>제1장: 서론 - 보은 관광의 패러다임 전환과 시공간적 확장</p>
        </div>
      </footer>
    </main>
  );
}
