"use client";

import { motion } from "framer-motion";
import { PageHeader, Section } from "@/components";
import {
  Megaphone,
  Users,
  Camera,
  Hash,
  Youtube,
  Instagram,
  Sparkles,
  Gift,
} from "lucide-react";

export default function MarketingPage() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <PageHeader
        icon={Megaphone}
        iconColor="text-pink-400"
        tag="제6장"
        tagColor="bg-pink-500/20 text-pink-400"
        title="관광객 매력도"
        subtitle="타겟 분석 및 마케팅 전략"
        gradientFrom="from-gray-900"
        gradientVia="via-pink-950/30"
        gradientTo="to-gray-900"
      />

      {/* 대표 이미지 */}
      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-xl overflow-hidden mb-4">
            <img
              src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800"
              alt="소셜미디어 마케팅"
              className="w-full h-48 object-cover"
            />
            <p className="text-xs text-gray-500 mt-2 text-center">SNS 마케팅 전략 | 출처: Unsplash</p>
          </div>
        </div>
      </section>

      {/* 6.1 타겟 고객 세분화 */}
      <Section title="6.1 타겟 고객 세분화">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-pink-500/20">
                <th className="p-4 text-left border border-gray-700">타겟층</th>
                <th className="p-4 text-left border border-gray-700">연령대</th>
                <th className="p-4 text-left border border-gray-700">관심 콘텐츠</th>
                <th className="p-4 text-left border border-gray-700">마케팅 채널</th>
                <th className="p-4 text-right border border-gray-700">예상 비율</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  target: "MZ세대 (호러매니아)",
                  age: "20~35세",
                  content: "호러 트레킹, AR 스탬프",
                  channel: "인스타그램, 틱톡, 유튜브",
                  percent: 35,
                  color: "orange",
                },
                {
                  target: "가족 단위",
                  age: "30~50대 부모 + 자녀",
                  content: "워터밤, 피크닉, 소원등",
                  channel: "네이버 블로그, 맘카페",
                  percent: 30,
                  color: "emerald",
                },
                {
                  target: "연인/친구 그룹",
                  age: "20~30대",
                  content: "야간 트레킹, 미디어아트",
                  channel: "인스타그램, 여행 플랫폼",
                  percent: 20,
                  color: "pink",
                },
                {
                  target: "중장년 힐링족",
                  age: "50~60대",
                  content: "세조길 트레킹, 문화유산",
                  channel: "네이버 카페, TV/라디오",
                  percent: 15,
                  color: "blue",
                },
              ].map((row, i) => {
                const colorClasses: Record<string, string> = {
                  orange: "text-orange-400",
                  emerald: "text-emerald-400",
                  pink: "text-pink-400",
                  blue: "text-blue-400",
                };
                const bgClasses: Record<string, string> = {
                  orange: "bg-orange-500",
                  emerald: "bg-emerald-500",
                  pink: "bg-pink-500",
                  blue: "bg-blue-500",
                };
                return (
                  <tr key={i} className="hover:bg-gray-800/50 transition-colors">
                    <td className={`p-4 border border-gray-700 font-bold ${colorClasses[row.color]}`}>{row.target}</td>
                    <td className="p-4 border border-gray-700 text-gray-300">{row.age}</td>
                    <td className="p-4 border border-gray-700 text-gray-300">{row.content}</td>
                    <td className="p-4 border border-gray-700 text-gray-300">{row.channel}</td>
                    <td className="p-4 border border-gray-700 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <div className="w-24 h-3 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${row.percent}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className={`h-full rounded-full ${bgClasses[row.color]}`}
                          />
                        </div>
                        <span className={`font-bold ${colorClasses[row.color]}`}>{row.percent}%</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </motion.div>
      </Section>

      {/* 6.2 SNS 바이럴 전략 */}
      <Section
        title="6.2 SNS 바이럴 전략"
        className="bg-gradient-to-b from-gray-900 via-pink-950/20 to-gray-900"
      >
        {/* 인스타그래머블 포토존 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-6">
            <Camera className="w-6 h-6 text-pink-400" />
            <h4 className="text-xl font-bold">인스타그래머블 포토존 설계</h4>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { location: "오리숲 입구", concept: "대형 도깨비 조형물 (야광)", hashtag: "#속리산도깨비 #도깨비의초대", color: "orange" },
              { location: "세조길 중간", concept: "빛 터널 (LED 연꽃)", hashtag: "#세조의길 #속리산야행", color: "yellow" },
              { location: "법주사 앞", concept: "미디어아트 프레임", hashtag: "#법주사빛축제 #미륵의빛", color: "purple" },
              { location: "워터밤 현장", concept: "대추나무 물총 조형물", hashtag: "#속리산워터밤 #대추물총전쟁", color: "blue" },
            ].map((item, i) => {
              const colorClasses: Record<string, string> = {
                orange: "bg-orange-500/10 border-orange-500/30",
                yellow: "bg-yellow-500/10 border-yellow-500/30",
                purple: "bg-purple-500/10 border-purple-500/30",
                blue: "bg-blue-500/10 border-blue-500/30",
              };
              const textColor: Record<string, string> = {
                orange: "text-orange-400",
                yellow: "text-yellow-400",
                purple: "text-purple-400",
                blue: "text-blue-400",
              };
              return (
                <motion.div
                  key={item.location}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`border rounded-xl p-4 ${colorClasses[item.color]}`}
                >
                  <p className={`font-bold mb-1 ${textColor[item.color]}`}>{item.location}</p>
                  <p className="text-sm text-gray-300 mb-2">{item.concept}</p>
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <Hash className="w-3 h-3" />
                    {item.hashtag}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* 인플루언서 협업 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-6">
            <Users className="w-6 h-6 text-purple-400" />
            <h4 className="text-xl font-bold">인플루언서 협업 계획</h4>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                platform: "유튜브",
                icon: Youtube,
                target: "공포 콘텐츠 크리에이터",
                example: "곽튜브, 공포학교 등",
                content: "호러 트레킹 체험 영상",
                color: "red",
              },
              {
                platform: "인스타그램",
                icon: Instagram,
                target: "여행 인플루언서",
                example: "10만+ 팔로워",
                content: "포토존 홍보, 스토리 이벤트",
                color: "pink",
              },
              {
                platform: "틱톡",
                icon: Sparkles,
                target: "MZ 인플루언서",
                example: "숏폼 전문",
                content: "숏폼 챌린지 (#도깨비씨름챌린지)",
                color: "cyan",
              },
            ].map((item, i) => {
              const colorClasses: Record<string, string> = {
                red: "bg-red-500/10 border-red-500/30 text-red-400",
                pink: "bg-pink-500/10 border-pink-500/30 text-pink-400",
                cyan: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400",
              };
              return (
                <motion.div
                  key={item.platform}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`border rounded-xl p-6 ${colorClasses[item.color]}`}
                >
                  <item.icon className="w-8 h-8 mb-4" />
                  <h5 className="font-bold text-white mb-1">{item.platform}</h5>
                  <p className="text-sm mb-3">{item.target}</p>
                  <p className="text-xs text-gray-400 mb-2">{item.example}</p>
                  <div className="bg-gray-900/50 rounded-lg p-2 text-xs">
                    {item.content}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* 바이럴 캠페인 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-6">
            <Gift className="w-6 h-6 text-yellow-400" />
            <h4 className="text-xl font-bold">바이럴 캠페인</h4>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "#도깨비씨름챌린지",
                desc: "틱톡에서 팔씨름 영상을 올리면 축제 입장권 증정",
                platform: "틱톡",
                color: "orange",
              },
              {
                name: "소원등 릴레이",
                desc: "소원등 사진을 올리고 3명을 태그하면 추첨하여 숙박권 증정",
                platform: "인스타그램",
                color: "yellow",
              },
              {
                name: "공포 리뷰 이벤트",
                desc: "호러 트레킹 후기 중 가장 무서운 리뷰에 상품권 증정",
                platform: "네이버/인스타",
                color: "purple",
              },
            ].map((item, i) => {
              const colorClasses: Record<string, string> = {
                orange: "bg-orange-500/10 border-orange-500/30",
                yellow: "bg-yellow-500/10 border-yellow-500/30",
                purple: "bg-purple-500/10 border-purple-500/30",
              };
              const textColor: Record<string, string> = {
                orange: "text-orange-400",
                yellow: "text-yellow-400",
                purple: "text-purple-400",
              };
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`border rounded-xl p-6 ${colorClasses[item.color]}`}
                >
                  <p className={`font-bold text-lg mb-2 ${textColor[item.color]}`}>{item.name}</p>
                  <p className="text-sm text-gray-300 mb-3">{item.desc}</p>
                  <span className="text-xs bg-gray-800 px-2 py-1 rounded">{item.platform}</span>
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
          <p>제6장: 관광객 매력도 - 타겟 분석 및 마케팅 전략</p>
        </div>
      </footer>
    </main>
  );
}
