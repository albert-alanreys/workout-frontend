import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import ExerciseLogService from '../../../../services/exercise/exercise-log.service';

export const useExerciseLog = () => {
	const { id } = useParams();

	const {
		data: exerciseLog,
		isSuccess,
		isLoading,
	} = useQuery({
		queryKey: ['get exercise log', id],
		queryFn: () => ExerciseLogService.getById(id),
		select: ({ data }) => data,
		enabled: !!id,
	});

	return {
		exerciseLog,
		isSuccess,
		isLoading,
	};
};
