import type { MatchProps } from "@/components/types";
import Link from "next/link";

const MatchResult: React.FC<{ match: MatchProps }> = ({ match }) => {
	const formattedDate = new Date(match.date).toLocaleDateString("en-GB", {
		day: "2-digit",
		month: "short",
		year: "numeric"
	});

	return (
		<div className='flex w-fit flex-col items-center gap-5 rounded-3xl bg-slate-500 p-5'>
			<div className='flex w-fit flex-col items-center justify-between gap-5'>
				<img className='h-fit w-20' src={match.logoteam1} alt={match.team1} />
				<p className='text-center text-5xl/10'>
					<span className='block'>{match.score1}</span>
					<span className='block'>-</span>
					<span className='block'>{match.score2}</span>
				</p>
				<img className='h-fit w-20' src={match.logoteam2} alt={match.team2} />
			</div>
			<p className='text-black text-xl'>{formattedDate}</p>
		</div>
	);
};

export default MatchResult;
