import { getCategories } from '@/services/category';
import { useQuery } from '@tanstack/react-query';

export function useGetCategories() {
  const { data, ...result } = useQuery({
    queryKey: ['getChannel'],
    queryFn: () => getCategories().then((res) => res.data),
  });

  return { data, ...result };
}