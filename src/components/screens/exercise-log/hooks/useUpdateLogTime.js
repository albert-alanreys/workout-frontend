import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import ExerciseLogService from '../../../../services/exercise/exercise-log.service';

export const useUpdateLogTime = () => {
	const { id } = useParams();

	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: ({ timeId, body }) =>
			ExerciseLogService.updateTime(timeId, body),
		onSuccess: () => {
			queryClient.invalidateQueries(['get exercise log', id]);
		},
	});

	const { mutate, error: errorChange } = mutation;

	return { updateTime: mutate, errorChange };
};
