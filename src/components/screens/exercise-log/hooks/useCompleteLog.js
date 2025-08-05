import { useMutation } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';

import ExerciseLogService from '../../../../services/exercise/exercise-log.service';

export const useCompleteLog = () => {
	const { id } = useParams();

	const navigate = useNavigate();

	const mutation = useMutation({
		mutationFn: (body) => ExerciseLogService.complete(id, body),
		onSuccess: ({ data }) => {
			navigate(`/workout/${data.workoutLogId}`);
		},
	});

	const { mutate, error: errorCompleted } = mutation;

	return { completeLog: mutate, errorCompleted };
};
