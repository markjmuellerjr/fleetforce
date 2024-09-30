'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Loader2, PlusCircle } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useActionState } from 'react';
import { inviteTeamMember } from '@/app/(login)/actions';
import { useUser } from '@/lib/auth';

type ActionState = {
  error?: string;
  success?: string;
};

export function InviteTeamMember() {
  const { user } = useUser();
  const isOwner = user?.role === 'owner';
  const [inviteState, inviteAction, isInvitePending] = useActionState<
    ActionState,
    FormData
  >(inviteTeamMember, { error: '', success: '' });

  return (
<<<<<<< HEAD
    <Card className='glass'>
      <CardHeader>
        <CardTitle className='text-white'>Invite Team Member</CardTitle>
=======
    <Card>
      <CardHeader>
        <CardTitle>Invite Team Member</CardTitle>
>>>>>>> 053a4893159df7e73e6a6d8a17d7c8cb4011801d
      </CardHeader>
      <CardContent>
        <form action={inviteAction} className="space-y-4">
          <div>
<<<<<<< HEAD
            <Label htmlFor="email" className='text-white'>Email</Label>
=======
            <Label htmlFor="email">Email</Label>
>>>>>>> 053a4893159df7e73e6a6d8a17d7c8cb4011801d
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter email"
              required
              disabled={!isOwner}
            />
          </div>
          <div>
<<<<<<< HEAD
            <Label className='text-white'>Role</Label>
            <RadioGroup
              defaultValue="member"
              name="role"
              className="flex space-x-4 text-white"
=======
            <Label>Role</Label>
            <RadioGroup
              defaultValue="member"
              name="role"
              className="flex space-x-4"
>>>>>>> 053a4893159df7e73e6a6d8a17d7c8cb4011801d
              disabled={!isOwner}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="member" id="member" />
<<<<<<< HEAD
                <Label htmlFor="member" className='text-white'>Member</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="owner" id="owner" />
                <Label htmlFor="owner" className='text-white'>Owner</Label>
=======
                <Label htmlFor="member">Member</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="owner" id="owner" />
                <Label htmlFor="owner">Owner</Label>
>>>>>>> 053a4893159df7e73e6a6d8a17d7c8cb4011801d
              </div>
            </RadioGroup>
          </div>
          {inviteState?.error && (
            <p className="text-red-500">{inviteState.error}</p>
          )}
          {inviteState?.success && (
            <p className="text-green-500">{inviteState.success}</p>
          )}
          <Button
            type="submit"
<<<<<<< HEAD
            className="bg-yellow-500 hover:bg-yellow-600 text-white"
=======
            className="bg-orange-500 hover:bg-orange-600 text-white"
>>>>>>> 053a4893159df7e73e6a6d8a17d7c8cb4011801d
            disabled={isInvitePending || !isOwner}
          >
            {isInvitePending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Inviting...
              </>
            ) : (
              <>
                <PlusCircle className="mr-2 h-4 w-4" />
                Invite Member
              </>
            )}
          </Button>
        </form>
      </CardContent>
      {!isOwner && (
        <CardFooter>
<<<<<<< HEAD
          <p className="text-sm text-muted-foreground text-white">
=======
          <p className="text-sm text-muted-foreground">
>>>>>>> 053a4893159df7e73e6a6d8a17d7c8cb4011801d
            You must be a team owner to invite new members.
          </p>
        </CardFooter>
      )}
    </Card>
  );
}
