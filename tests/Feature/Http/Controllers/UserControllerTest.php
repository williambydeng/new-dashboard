<?php

namespace Tests\Feature\Http\Controllers;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;

class UserControllerTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function user_can_update_own_profile()
    {
        
        $user = User::factory()->create();
        $other_user = User::factory()->create([
            'avatar' => 2,
        ]);
        $response = $this->actingAs($user)->post(route('user.profile.update', $other_user), [
            'avatar' => 5,
        ]);

        $response->assertForbidden();
        $other_user->refresh();
        $this->assertNotEquals(5, $other_user->avatar);
    }
}
