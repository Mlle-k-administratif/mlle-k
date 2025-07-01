import Image from 'next/image';
import { z } from '@zod/mini';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const ServiceCardSchema = z.object({
  icon: z.optional(z.string()),
  title: z.string(),
  description: z.string(),
  list: z.array(z.string()),
});


type ServiceCardProps = z.infer<typeof ServiceCardSchema>;

export default function ServiceCard({
  icon,
  title,
  description,
  list,
}: ServiceCardProps) {
  return (
    <Card className="w-full h-full drop-shadow-lg">
      <CardHeader>
        <div className="mb-4">
          {icon && (
            <Image
              src={icon}
              alt={title}
              width={48}
              height={48}
              className="object-contain"
            />
          )}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-4 space-y-2">
          {list.map((item, index) => (
            <li key={index} className="text-sm text-muted-foreground">
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
