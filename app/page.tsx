import MatchResult from "@/components/MatchResult";
import type { MatchProps } from "@/components/types";

const matchData: MatchProps = {
	team1: "Team A",
	team2: "Team B",
	logoteam1: "/images/LOGO_SIMPLIFICADO_VNEE_COR.png",
	logoteam2: "/images/vengeance_logo_mascote.png",
	score1: 3,
	score2: 1,
	date: "2024-12-15T14:00:00Z",
	status: "finished"
};

export default function Home() {
	return (
		<div className='h-screen'>
			<h1 className='text-3xl font-bold underline'>Hello world!</h1>
			<MatchResult match={matchData} />
		</div>
	);
}
