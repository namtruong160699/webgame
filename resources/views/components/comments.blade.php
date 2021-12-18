<div class="idnet-comments">
    @foreach($ratings as $rating)
    <div class="idnet-activity">
        <div class="comment-user-content">
            <div class="comment-header">
                <p>
                    <a href="" target="_blank" class="author">{{isset($rating->user->name) ? $rating->user->name : '[N\A]'}}</a>&nbsp;<small><span class="timeago" title="{{$rating->created_at}}">{{$rating->created_at}}</span></small>
                </p>
                <span class="game-rating">
                    @for($i = 1 ; $i <= 5 ; $i ++)
                        <span class="mr5 ti-star {{ $i <= $rating->ra_number ? 'active' : '' }}"></span>
                    @endfor
                </span>
                <p>{{$rating->ra_content}}</p>
            </div>
        </div>
    </div>
    @endforeach
</div>
<div class="blog-pagination text-center">
    @if($ratings->lastPage() > 1)
        <ul class="pagination">
            <li class="{{ ($ratings->currentPage() == 1) ? ' disabled' : '' }}"><a href="{{ $ratings->url(1) }}"><span class="ti-angle-double-left"></span></a></li>
            @for($i = 1; $i <= $ratings->lastPage(); $i++)
                <li class="{{ ($ratings->currentPage() == $i) ? ' active' : '' }}"><a href="{{ $ratings->url($i) }}">{{ $i }}</a></li>
            @endfor
            <li class="{{ ($ratings->currentPage() == $ratings->lastPage()) ? ' disabled' : '' }}"><a href="{{ $ratings->url($ratings->currentPage()+1) }}"><span class="ti-angle-double-right"></span></a></li>
        </ul>
    @endif
</div>