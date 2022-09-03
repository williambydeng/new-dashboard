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

        $response = $this->actingAs($user)->post(route('user.profile.update', $user), [
            'avatar' => 5,
        ]);

        $response->assertSuccessful();
        $user->refresh();
        $this->assertEquals(5, $user->avatar);
    }
}
