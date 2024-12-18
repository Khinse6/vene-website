import Link from "next/link";
import type { MatchProps } from "@/components/types";

const MatchResult: React.FC<{ match: MatchProps }> = ({ match }) => {
	const formattedDate = new Date(match.date).toLocaleDateString("en-GB", {
		day: "2-digit",
		month: "short",
		year: "numeric"
	});

	return (
		<div className='flex flex-col w-40 items-center justify-center bg-slate-500 rounded-3xl p-5'>
			<img className='w-20' src={match.logoteam1} alt={match.team1} />
			<p className='text-5xl/10 max-w-[5ch] mx-auto text-center my-4'>
				<span className='block'>{match.score1}</span>
				<span className='block'>-</span>
				<span className='block'>{match.score2}</span>
			</p>
			<img className='w-20' src={match.logoteam2} alt={match.team2} />
			<p className='text-xl text-black mt-4'>{formattedDate}</p>
		</div>
	);
};

export default MatchResult;
